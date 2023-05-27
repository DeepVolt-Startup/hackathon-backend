const deleteAdminInteractor = async (id, Admin) => {
    if (!id) {
        return {
            status: 400,
            data: { msg: "Invalid crendentials !" },
        };
    }

    try {
        const deletedAdmin = await Admin.destroy({
            where: {
                admin_id : id,
            },
        });

        // deletedUser will return the number of deleted admins
        if (deletedAdmin=== 0) {
            return {
                status: 400,
                data: {
                    msg: "Admin does not exist !",
                },
            };
        }

        return {
            status: 200,
            data: { msg: "Admin deleted successfully !" },
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

module.exports = deleteAdminInteractor;
