const { createUserToken } = require("../../utils/createUserToken");

const emailConfirmationInteractor = async (
    User,
    user_id,
    Code,
    code_id,
    typedCode,
    t,
) => {
    try {
        // check if user exist
        const user = await User.findByPk(user_id);

        // id user doesn't exist
        if (user === null) {
            return {
                status: 401,
                data: {
                    msg: "user doesn't exist !",
                },
            };
        }

        // check if code exist
        const codeExist = await Code.findOne({
            where: { code_id: code_id },
        });

        // if code doesn't exist
        if (codeExist === null) {
            return {
                status: 401,
                data: {
                    msg: "Unauthorized !",
                },
            };
        }

        // if the code is used
        if (codeExist.dataValues.isUsed) {
            return {
                status: 401,
                data: {
                    msg: "User already confirmed !",
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
            await User.update(
                { confirmed: true },
                {
                    where: {
                        user_id: user_id,
                    },
                },
                { transaction: t },
            );

            // setting isUsed of code to "true"
            await Code.update(
                { isUsed: true },
                {
                    where: {
                        code_id: code_id,
                    },
                },
                { transaction: t },
            );

            await t.commit();

            // creating token
            const token = createUserToken(user);

            // sending token :
            return {
                status: 200,
                data: {
                    fullname : user.fullname,
                    email : user.email,
                    token,
                },
            };
        }
        // expired code
        return {
            status: 400,
            data: {
                msg: "Invalid or expired code !",
            },
        };
    } catch (err) {
        console.log(err);
        await t.rollback();
        return {
            status: 500,
            data: {
                msg: "Error occured, please try later !",
            },
        };
    }
    // updating the confirmed on the user
};

module.exports = emailConfirmationInteractor;
