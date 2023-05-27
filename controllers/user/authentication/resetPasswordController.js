const signInInteractor = require("../../../use-case/user/signInInteractor");
const { User } = require("../../../models/User");
const bcrypt = require("bcrypt");
const { createUserToken } = require("../../../utils/createUserToken");
const resetPasswordIteractor = require("../../../use-case/user/resetPasswordIteractor");

const resetPasswordController = async (req, res) => {
    const hashSync = bcrypt.hashSync;
    
    const { email, password } = req.body ;

    const result = await resetPasswordIteractor(
        email,
        password,
        User,
        createUserToken,
        hashSync
    );

    res.status(result.status).json(result.data);
};

module.exports = resetPasswordController;
