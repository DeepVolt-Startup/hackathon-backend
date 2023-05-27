const refreshTokenInteractor = async (id, createAdminToken, Admin) => {
    console.log(id);
    try {
        const adminExist = await Admin.findByPk(id);
        if (adminExist === null) {
            return {
                status: 401,
                data: {
                    msg: "Unauthorized !",
                },
            };
        }
        // generating new access and refresh tokens
        const newAdminToken = createAdminToken(adminExist.dataValues);
        // returning new token
        return {
            status: 200,
            data: {
                newAdminToken,
                fullname: adminExist.dataValues.fullname,
                email: adminExist.dataValues.email,
                role: adminExist.dataValues.role,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: { msg: "Error occured, try again later !" },
        };
    }
};

module.exports = refreshTokenInteractor;
