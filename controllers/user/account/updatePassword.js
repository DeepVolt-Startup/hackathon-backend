const { User } = require("../../../models/User");
const updatePasswordInteractor = require("../../../use-case/user/updatePasswordInteractor");
const bcrypt = require("bcrypt");

const accountDetails = async (req, res) => {
    const { id } = req.token;

    const { password, newPassword } = req.body;

    const hashSync = bcrypt.hashSync;

    const compare = bcrypt.compare;

    const result = await updatePasswordInteractor(User, password, newPassword, hashSync, id, compare);

    res.status(result.status).json(result.data);
};

module.exports = accountDetails;
