const updatePasswordInteractor = async (
    User,
    password,
    newPassword,
    hashSync,
    id,
    compare,
) => {
    try {
        const user = await User.findByPk(id);
        if (user === null) {
            return {
                status: 409,
                data: {
                    msg: "Invalid credentials !",
                },
            };
        }
        // if the user is not confirmed !
        if (user.dataValues.confirmed === false) {
            return {
                status: 401,
                data: {
                    msg: "Unauthorized !",
                },
            };
        }
        const newPwd = hashSync(newPassword, 8);

        const comparePasswords = await compare(
            password,
            user.dataValues.password,
        );

        if (comparePasswords === true) {
            // update the password
            await User.update(
                { password: newPwd },
                {
                    where: {
                        user_id: id,
                    },
                },
            );
            return {
                status: 200,
                data: {
                    msg: "Password updated successfully",
                    user: {
                        id: user.user_id,
                        fullname: user.fullname,
                        email: user.email,
                        company: user.company,
                        position: user.position,
                        country: user.country,
                        phone_number: user.phone_number,
                        has_access: user.has_access,
                        created_at: user.created_at,
                    },
                },
            };
        }
        return {
            status: 409,
            data: {
                msg: "Invalid credentials !",
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

module.exports = updatePasswordInteractor;
