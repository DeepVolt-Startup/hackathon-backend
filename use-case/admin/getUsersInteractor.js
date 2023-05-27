const getUsersInteractor = async (User) => {
    console.log("get users");
    try {
        const allUsers = await User.findAll({
            attributes: [
                ["user_id", "id"],
                "fullname",
                "email",
                "company",
                "position",
                "country",
                "phone_number",
                "created_at",
                "updated_at",
                ["has_access", "access"],
                ["sent_invitations_count", "num_sent_invites"],
            ],
        });
        return {
            status: 200,
            data: allUsers,
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: {
                msg: "Error occured, please try again !",
            },
        };
    }
};

module.exports = getUsersInteractor;
