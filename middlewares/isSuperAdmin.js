const isSuperAdmin = (req, res, next) => {
    // check if admin exist
    
    const { role } = req.token;

    if (role.toUpperCase() !== "SUPER-ADMIN") {
        return res.status(401).json({
            status: 401,
            data: {
                msg: "Unauthorized !",
            },
        });
    } else {
        next();
    }
};

module.exports = isSuperAdmin;
