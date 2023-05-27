const updateProfileInteractor = async (User, infos, id) => {
    try {
        console.log(infos, id);

        const user = await User.findByPk(id);

        // if the request contains the password
        if (infos.password !== undefined) {
            return {
                status: 409,
                data: {
                    msg: "Invalid credentials !",
                },
            };
        }
        // if the user doesn't exist
        if (user === null) {
            return {
                status: 409,
                data: {
                    msg: "Invalid credentials !",
                },
            };
        }
        // we should verify infos.email, infos.password
        const updatedUser = await User.update(infos, {
            where: {
                user_id: id,
            },
        });

        if (updatedUser) {
            const newUser = await User.findByPk(id);
            newUser.updated_at = new Date();

            // to remove the password property from the response
            const clone = (({ password, ...o }) => o)(newUser.dataValues);
            return {
                status: 200,
                data: {
                    user: clone,
                },
            };
        }
    } catch (err) {
        console.log(err);
        return {
            status: 501,
            data: {
                msg: "Error occured please try later !",
            },
        };
    }
};

module.exports = updateProfileInteractor;
