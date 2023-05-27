const updateAccountDetailsInteractor = async (Admin, infos, id) => {
    try {
        console.log(id);
        const admin = await Admin.findByPk(id);
        
        // if the request contains the password
        if (infos.password !== undefined) {
            return {
                status: 409,
                data: {
                    msg: "Invalid credentials !",
                },
            };
        }

        // if the admin doesn't exist
        if (admin === null) {
            return {
                status: 409,
                data: {
                    msg: "Invalid credentials !",
                },
            };
        }

        // we should verify infos.email, infos.password
        const updatedAdmin = await Admin.update(infos, {
            where: {
                admin_id: id,
            },
        });

        if (updatedAdmin) {
            const newAdmin = await Admin.findByPk(id);
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

module.exports = updateAccountDetailsInteractor;
