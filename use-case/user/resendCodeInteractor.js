const resendCodeInteractor = async (
    email,
    User,
    randomNb,
    Code,
    makeCode,
    sendEmail,
    join,
) => {
    console.log(email);
    try {
        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (user === null) {
            return {
                status: 401,
                data: {
                    msg: "User doesn't exist",
                },
            };
        }

        // account already confirmed
        if (user.dataValues.confirmed === true) {
            return {
                status: 401,
                data: {
                    msg: "Account already confirmed !",
                },
            };
        }
        // so at this point the account exist and not confirmed
        // create new code
        const code = new Code(makeCode(randomNb));
        const createdCode = await Code.create(code.dataValues);

        // html code
        const htmlCode = `
        <html>
        <body style="font-family : verdana">
        <style>
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
            Dear ${user.fullname},
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
        let subject = `Verification Code : ${createdCode.dataValues.code_text}`;
        let attachments = [{
                filename: "pic-v1.png",
                path: join(__dirname, "..", "..", "img", "pic-v1.png"),
                cid: "logo",
            },
        ];
        sendEmail(email, subject, htmlCode, attachments);
        return {
            status: 200,
            data: {
                code_id: createdCode.dataValues.code_id,
                email: user.dataValues.email,
                user_id: user.dataValues.user_id,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            status: 501,
            data: {
                msg: "Error occured, please try later !",
            },
        };
    }
};

module.exports = resendCodeInteractor;
