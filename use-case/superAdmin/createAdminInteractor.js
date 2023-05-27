const createAdminInteractor = async (infos, Admin, makeAdmin, hashSync) => {
    try {
        console.log(infos);

        const admin = new Admin(makeAdmin(infos));

        const adminExist = await Admin.findOne({
            where: {
                email: admin.email,
            },
        });

        if (adminExist !== null) {
            return {
                status: 409,
                data: {
                    msg: "Admin already exist",
                },
            };
        }

        // executig the transaction
        const createdAdmin = await Admin.create({
            fullname: admin.fullname,
            email: admin.email,
            password: hashSync(admin.password, 8),
            role: admin.role,
        });

        return {
            status: 200,
            data: {
                id: createdAdmin.admin_id,
                fullname: createdAdmin.fullname,
                email: createdAdmin.email,
                role: createdAdmin.role,
            },
        };
    } catch (err) {
        console.log(err);

        if (err.message.includes("Invalid")) {
            return {
                status: 401,
                data: {
                    msg: err.message, // this error will come from makeAdmin() fct (throw error(...))
                },
            };
        } else {
            return {
                status: 501,
                data: {
                    msg: "Error occured, please try again later !",
                },
            };
        }
    }
};

module.exports = createAdminInteractor;
