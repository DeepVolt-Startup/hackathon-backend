const { Admin } = require("../../../models/Admin");
const bcrypt = require("bcrypt");
const { createAdminToken } = require("../../../utils/createAdminToken");
const signInInteractor = require("../../../use-case/admin/signInInteractor");

const adminSignIn = async (req, res) => {
    const compare = bcrypt.compare;

    const result = await signInInteractor({
        infos: req.body,
        Admin,
        compare,
        createAdminToken,
    });
    res.status(result.status).json(result.data);
};

module.exports = adminSignIn;
