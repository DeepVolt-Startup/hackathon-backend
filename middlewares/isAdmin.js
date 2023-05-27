const isAdmin = (req, res, next) => {
    // check if admin exist

    //check for role
    const { role } = req.token;

    if (role.toUpperCase() !== "ADMIN" && role.toUpperCase() !== "SUPER-ADMIN") {
        return res.status(401).json({
            status: 401,
            error: {
                msg: "Unauthorized !",
            },
        });
    } else {
        next();
    }
};

module.exports = isAdmin;
