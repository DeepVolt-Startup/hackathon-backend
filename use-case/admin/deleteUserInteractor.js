const deleteUserInteractor = async (id, User) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                user_id: id,
            },
        });

        // deletedUser will return the number of deleted users
        if (deletedUser === 0) {
            return {
                status: 400,
                data: {
                    msg: "User does not exist !",
                },
            };
        }

        return {
            status: 200,
            data: {
                msg: "User deleted successfully !",
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

module.exports = deleteUserInteractor;
