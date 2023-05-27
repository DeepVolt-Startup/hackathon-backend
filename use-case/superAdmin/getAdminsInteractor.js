const getAdminsInteractor = async (Admin) => {
    try {
        const allAdmins = await Admin.findAll({
            attributes: ["admin_id","fullname", "email", "role", "created_at", "updated_at"],
        });
        console.log("Here are all admins:", allAdmins);
        return {
            status: 200,
            data: allAdmins,
        };
    } catch (err) {
        return {
            status: 500,
            data: {
                msg: "Error occured, please try again !",
            },
        };
    }
};

module.exports = getAdminsInteractor;
