const updatePasswordInteractor = async (Admin, password, newPassword, hashSync, id, compare) => {
    try {
        const admin = await Admin.findByPk(id);
        // console.log("this is the admin", admin);

        if (admin === null) {
            return {
                status: 409,
                data: {
                    msg: "Invalid credentials !",
                },
            };
        }
        const newPwd = hashSync(newPassword, 8);

        const comparePasswords = await compare(
            password,
            admin.dataValues.password,
        );

        if (comparePasswords === true) {
            // update the password
            await Admin.update(
                { password: newPwd },
                {
                    where: { 
                        admin_id: id,
                    },
                },
            );
            return {
                status: 200,
                data: {
                    msg: "Password updated successfully",
                    admin: {
                        id: admin.admin_id,
                        fullname: admin.fullname,
                        email: admin.email,
                        company: admin.company,
                        position: admin.position,
                        country: admin.country,
                        phone_number: admin.phone_number,
                        has_access: admin.has_access,
                        created_at: admin.created_at,
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
