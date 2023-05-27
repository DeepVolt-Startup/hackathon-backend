const jwt_decode = require("jwt-decode");

const decodeJWT = (token) => {
    const payload = jwt_decode(token);
    return payload;
};

module.exports = decodeJWT;
