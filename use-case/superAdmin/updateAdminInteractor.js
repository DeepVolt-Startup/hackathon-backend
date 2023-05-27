const updateAdminInteractor = async (Admin, infos, id) => {

    try {
        const admin = await Admin.findByPk(id);

        if (admin === null) {
            return {
                status: 401,
                data: {
                    msg: "Admin does not exist",
                },
            };
        }

        const updatedAdmin = await Admin.update(infos, {
            where: {
                admin_id: id,
            },
        });

        if (updatedAdmin) {
            const newAdmin = await Admin.findByPk(id);

            newAdmin.updated_at = new Date();
            return {
                status: 200,
                data: {
                    admin: newAdmin,
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

module.exports = updateAdminInteractor;
