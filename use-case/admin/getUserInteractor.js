const getUserInteractor = async (id, User) => {
    //console.log(id);
    try {
        const user = await User.findOne({
            where: {
                user_id: id,
            },
            attributes: [
                ["user_id", "id"],
                "fullname",
                "email",
                "company",
                "position",
                "country",
                "phone_number",
                "created_at",
                ["has_access", "access"],
            ],
        });
        return {
            status: 200,
            data: user,
        };
    } catch (err) {
        //console.log(err);
        return {
            status: 500,
            data: {
                msg: "Error occured, please try again !",
            },
        };
    }
};

module.exports = getUserInteractor;
