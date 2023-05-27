const { Admin } = require("../../../models/Admin");
const updatePasswordInteractor = require("../../../use-case/admin/updatePasswordInteractor");
const bcrypt = require("bcrypt");

const updatePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.token;

    const hashSync = bcrypt.hashSync;

    const compare = bcrypt.compare;

    const result = await updatePasswordInteractor(Admin, oldPassword, newPassword, hashSync, id, compare);

    res.status(result.status).json(result.data);
};

module.exports = updatePassword;
