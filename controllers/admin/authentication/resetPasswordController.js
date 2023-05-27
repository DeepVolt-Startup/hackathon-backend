const { Admin } = require("../../../models/Admin");
const bcrypt = require("bcrypt");
const { createAdminToken } = require("../../../utils/createAdminToken");
const resetPasswordIteractor = require("../../../use-case/admin/resetPasswordAdminInteractor");

const resetPasswordController = async (req, res) => {
    const hashSync = bcrypt.hashSync;
    
    const { email, password } = req.body ;

    const result = await resetPasswordIteractor(
        email,
        password,
        Admin,
        createAdminToken,
        hashSync
    );

    res.status(result.status).json(result.data);
};

module.exports = resetPasswordController;
