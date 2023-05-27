const jwt = require("jsonwebtoken");

const createUserToken = (user) => {
    return jwt.sign(
        {
            id: user.user_id,
        },
        process.env.JWT_ACCESS_SECRET,
        {
            expiresIn: "7d",
        },
    );
};

module.exports = {
    createUserToken,
};
