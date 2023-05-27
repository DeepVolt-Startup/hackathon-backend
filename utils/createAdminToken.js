const jwt = require("jsonwebtoken");

const createAdminToken = (admin) => {
    console.log("create admin token", );
    return jwt.sign(
        {
            id: admin.admin_id,
            role: admin.role,
        },
        process.env.JWT_ACCESS_SECRET,
        {
            expiresIn: "7d",
        },
    );
};

module.exports = {
    createAdminToken,
};
