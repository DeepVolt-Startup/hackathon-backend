const signUpInteractor = async ({
    infos,
    User,
    makeUser,
    hashSync,
    randomNb,
    Code,
    makeCode,
    t,
    sendEmail,
    validators,
    Company,
    makeCompany,
    join
}) => {
    try {
        let user = new User({ ...infos });

        // Validating the user
        user.makeUser(validators);

        const code = new Code(makeCode(randomNb, validators));

        const userExist = await User.findOne({
            where: {
                email: user.email,
            },
        });
        // if the user already exist, surely company(domain name) already exist
        // if !has_access(company) => access denied !

        if (userExist !== null) {
            return {
                status: 409,
                data: {
                    msg: "User already exist",
                    fullname: userExist.fullname,
                    email: userExist.email,
                },
            };
        }

    const domainName = user.email.split("@")[1];

        console.log("abcdedf", domainName)
        const company = new Company(makeCompany(domainName));

        const existCompany = await Company.findOne({
            where: {
                domain: domainName,
            },
        });
        console.log("exist company : ", existCompany);

        let companyID = "";

        // if company does not exist
        if (existCompany === null) {
            await Company.create(company.dataValues);
            companyID = company.dataValues.company_id;
        }
        // if company exist
        if (existCompany !== null) {
            companyID = existCompany.dataValues.company_id;
        }

        // company hasn't access
    if (existCompany !== null && existCompany.has_access === false) {
        console.log("company blocked");
        return {
          status: 406,
          data: {
            msg: "Company blocked !",
          },
        };
      }
        // company has access
        // executig the transaction
        const createdUser = await User.create(
            {
                fullname: user.fullname,
                email: user.email,
                country: user.country,
                company: user.company,
                position: user.position,
                password: hashSync(user.password, 8),
                phone_number: user.phone_number,
                company_id: companyID,
            },
            { transaction: t },
        );

        // saving the emailConfirmCode to the db
        const createdCode = await Code.create(code.dataValues, {
            transaction: t,
        });
        await t.commit();
        // html code
        const htmlCode = `
        <html>
        <body>
        <style>
            body {
                font-family : Calibri;
                font-size:12px;
            }
            .social-media-container {
                display : flex;
            }
            a {
                cursor:pointer;
            }
            .container {
                margin : 0 auto;
                margin-top: 1rem;
            }
            img {
                margin-top:1rem;
            }
        </style>
    
            Dear ${createdUser.fullname},
            <br />
            <p>
            Thank you for signing up for DLIA. To verify your account, please use the following verification code:
            <br />
            <br />
            We are excited to have you as part of our community!
            <br />
            <h2> Verification Code: ${createdCode.code_text} </h2>
            if you did not create an account on DLIA, you can ignore this email.
            <br />
            <br />
            If you have any questions or concerns, please contact our support team at contact@deepvolt.io.
            <br />
            <br />
            Thank you for choosing DeepVolt.
            <br />
            <br />
            Best regards,
            <br />
            <br />
            DeepVolt Team
            <br />
            </p>
                <div class="container">
                    <img src="cid:logo" width="205"/>
                </div>
        </body>
    </html>
        `;

        //sending email to the user
        let subject = `Verification Code : ${createdCode.code_text}`;
        let attachments = [{
                filename: "pic-v1.png",
                path: join(__dirname, "..", "..", "img", "pic-v1.png"),
                cid: "logo",
            },
        ];

        sendEmail(createdUser.email, subject, htmlCode, attachments);

        return {
            status: 200,
            data: {
                user_id: createdUser.user_id,
                email: createdUser.email,
                code_id: createdCode.code_id,
            },
        };
    } catch (err) {
        console.log(err);
        await t.rollback();

        if (err.message.includes("Invalid")) {
            return {
                status: 401,
                data: {
                    msg: err.message,
                },
            };
        } else {
            return {
                status: 501,
                data: {
                    msg: "Error occured, please try again later !",
                },
            };
        }
    }
};

module.exports = signUpInteractor;
