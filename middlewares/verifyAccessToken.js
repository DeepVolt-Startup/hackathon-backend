const jwt = require("jsonwebtoken");

const config = process.env;
console.log("verify access token");

const verifyToken = (req, res, next) => {
    if (!req.headers || !req.headers.authorization) {
        return res.status(401).json({
            status: 401,
            data: {
                msg: "Unauthorized !",
            },
        });
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: 401,
            data: {
                msg: "Unauthorized !",
            },
        });
    }

    jwt.verify(token, config.JWT_ACCESS_SECRET, async (err, decoded) => {
        if (err) {
            res.status(401).json({
                status: 401,
                data: {
                    msg: "Unauthorized !",
                },
            });
        } else {
            console.log("aa", decoded);
            req.token = decoded;
            next();
        }
    });
};

module.exports = verifyToken;
