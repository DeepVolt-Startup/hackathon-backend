const refreshTokenInteractor = async (id, createUserToken, User) => {
    try {
        const userExist = await User.findByPk(id);
        if (!userExist.dataValues.confirmed) {
            return {
                status: 401,
                data: {
                    msg: "Unauthorized !",
                },
            };
        }

        if (userExist === null) {
            return {
                status: 401,
                data: {
                    msg: "Unauthorized",
                },
            };
        }
        // generating new access and refresh tokens
        const newUserToken = createUserToken(userExist.dataValues);

        // returning new token
        return {
            status: 200,
            data: {
                newUserToken,
                fullname: userExist.dataValues.fullname,
                email: userExist.dataValues.email,
                country: userExist.dataValues.country,
                company: userExist.dataValues.company,
                position: userExist.dataValues.position,
                phone_number: userExist.dataValues.phone_number,
                access: userExist.dataValues.has_access,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: { msg: "error occured, try again later" },
        };
    }
};

module.exports = refreshTokenInteractor;
