const { Admin } = require("../../../models/Admin");
const { createAdminToken } = require("../../../utils/createAdminToken");
const refreshTokenInteractor = require("../../../use-case/admin/refreshTokenInteractor");

const refreshToken = async (req, res) => {
    const { id } = req.token;
    console.log(id)
    const result = await refreshTokenInteractor(
        id,
        createAdminToken,
        Admin,
    );
    res.status(result.status).json(result.data);
};

module.exports = refreshToken;
