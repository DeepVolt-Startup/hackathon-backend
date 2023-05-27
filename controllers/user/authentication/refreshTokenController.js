const { createUserToken } = require("../../../utils/createUserToken");
const refreshTokenInteractor = require("../../../use-case/user/refreshTokenInteractor");
const { User } = require("../../../models/User");

const refreshTokenController = async (req, res) => {
    console.log("token : ", req.token);
    const { id } = req.token;

    const result = await refreshTokenInteractor(id, createUserToken, User);

    return res.status(result.status).json(result.data);
};

module.exports = refreshTokenController;
