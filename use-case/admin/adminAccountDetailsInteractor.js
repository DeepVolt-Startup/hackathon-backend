const adminAccountDetailsInteractor = async (Admin, id) => {
    try {
        const admin = await Admin.findOne({
            where: {
                admin_id: id,
            },
        });
        if (!admin) {
            return {
                status: 406,
                data: {
                    msg: "Admin doesn't exist !",
                },
            };
        }
        return {
            status: 200,
            data: {
                fullname: admin.fullname,
                email: admin.email,
                role: admin.role,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: {
                msg: "Error occured please try again later !",
            },
        };
    }
};

module.exports = adminAccountDetailsInteractor;
