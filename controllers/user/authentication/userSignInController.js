const signInInteractor = require("../../../use-case/user/signInInteractor");
const { User } = require("../../../models/User");
const bcrypt = require("bcrypt");
const { createUserToken } = require("../../../utils/createUserToken");

const signInController = async (req, res) => {
    const compare = bcrypt.compare;

    const result = await signInInteractor({
        infos: req.body,
        User,
        compare,
        createUserToken,
    });
    res.status(result.status).json(result.data);
};

module.exports = signInController;
