const confirmPasswordInteractor = async (email, Code, code_id, typedCode) => {
    try {

        // check if the typed code or email are invalid
        if (!email || !typedCode || !code_id) {
            return {
                status: 401,
                data: {
                    msg: "Invalid credentials !",
                },
            };
        }

        // check if code exist
        const codeExist = await Code.findOne({
            where: {
                code_id,
            },
        });

        // if code doesn't exist
        if (codeExist === null) {
            return {
                status: 401,
                data: {
                    msg: "Invalid code !",
                },
            };
        }

        // if the code is used
        if (codeExist.dataValues.isUsed === true) {
            return {
                status: 401,
                data: {
                    msg: "Code already used",
                },
            };
        }

        // checking if the code is not expired yet
        //const currDate = new Date(new Date().getTime());

        //console.log(codeExist.dataValues.code_text.toString() === typedCode);
        //console.log(currDate <= codeExist.dataValues.expired_at);

        if (
            codeExist.dataValues.code_text.toString() === typedCode &&
            new Date(new Date().getTime()) <= codeExist.dataValues.expired_at
        ) {
            // setting isUsed of code to "true"
            Code.update(
                { isUsed: true },
                {
                    where: {
                        code_id: code_id,
                    },
                },
            );

            // sending token :
            return {
                status: 200,
                data: {
                    email,
                },
            };
        }
        // expired code
        return {
            status: 400,
            data: {
                msg: "Invalid or expired code",
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
    // updating the confirmed on the user
};

module.exports = confirmPasswordInteractor;
