const resetPasswordIteractor = async (
    email,
    newPassword,
    User,
    createUserToken,
    hashSync
) => {
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

        await User.update(
            { password: hashSync(newPassword, 8) },
            {
                where: {
                    email: email,
                },
            },
        );

        const token = createUserToken(user);

        console.log("token : ",token);

        return {
            status: 200,
            data: {
                msg: "Password updated successfully",
                token,
                email: user.dataValues.email,
            },
        };
    } catch (err) {
        return {
            status: 501,
            data: {
                msg: "Error occured, please try later !",
            },
        };
    }
};

module.exports = resetPasswordIteractor;
