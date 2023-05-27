const forgotPasswordInteractor = async (
    email,
    User,
    makeCode,
    Code,
    randomNb,
    sendEmail,
    join
) => {
    if (!email) {
        return {
            status: 401,
            data: {
                msg: "Invalid credentials !",
            },
        };
    }
    // check if the user exist
    try {
        const user = await User.findOne({
            where: {
                email,
            },
        });

        // user does not exist
        if (user === null) {
            return {
                status: 401,
                data: {
                    msg: "Invalid credentials !",
                },
            };
        }

        const code = new Code(makeCode(randomNb));
        const createdCode = await Code.create(code.dataValues);
        
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
            We have received a request to reset the password for your account on DLIA.
            <br/>
            <h2> Verification Code: ${createdCode.code_text} </h2>
            If you did not request a password reset, please ignore this email.
            <br />
            <br />
            If you have any questions or concerns, please contact our support team at contact@deepvolt.io.
            <br />
            <br />
            Thank you,
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
                msg: "Code sent successfully",
                email,
                code_id: createdCode.code_id,
            },
        };
    } catch (err) {
        //console.log(err);
        return {
            status: 501,
            data: {
                msg: "Error occured, please try later !",
            },
        };
    }
};
module.exports = forgotPasswordInteractor;
