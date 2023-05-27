const resetPasswordAdminInteractor = async (
    email,
    newPassword,
    Admin,
    createAdminToken,
    hashSync
) => {
    try {
        const admin = await Admin.findOne({
            where: {
                email,
            },
        });

        if (admin === null) {
            return {
                status: 401,
                data: {
                    msg: "Admin doesn't exist",
                },
            };
        }

        await Admin.update(
            { password: hashSync(newPassword, 8) },
            {
                where: {
                    email: email,
                },
            },
        );

        const token = createAdminToken(admin);

        console.log("token : ",token);

        return {
            status: 200,
            data: {
                msg: "Password updated successfully",
                token,
                email: admin.dataValues.email,
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

module.exports = resetPasswordAdminInteractor;
