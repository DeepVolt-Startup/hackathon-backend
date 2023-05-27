const accountDetailsInteractor = async (User, token) => {
    try {
        const { id } = token;

        const user = await User.findOne({
            where: {
                user_id: id,
                confirmed: true,
            },
        });
        return {
            status: 200,
            data: {
                fullname: user.fullname,
                email: user.email,
                phone_number: user.phone_number,
                company: user.company,
                country: user.country,
                position: user.position,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            data: {
                msg: "Error ocuured please try again later !",
            },
        };
    }
};

module.exports = accountDetailsInteractor;
