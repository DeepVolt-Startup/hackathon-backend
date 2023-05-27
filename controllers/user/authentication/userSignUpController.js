const { User, makeUser } = require("../../../models/User");
const bcrypt = require("bcrypt");
const signUpInteractor = require("../../../use-case/user/signUpInteractor");
const { Code, makeCode } = require("../../../models/Code");
const { sequelize } = require("../../../db/connect");
const sendEmail = require("../../../utils/sendingEmail");
const validators = require("../../../utils/validators");
const { Company,makeCompany } = require("../../../models/Company");
const path = require("path");

const signup = async (req, res) => {
    // fct to compare the password
    const hashSync = bcrypt.hashSync;
    // random number
    const randomNb = Math.floor(100000 + Math.random() * 900000);
    // initialize a transaction
    const t = await sequelize.transaction();
    const join = path.join;

    // calling the interactor
    const result = await signUpInteractor({
        infos: req.body,
        User,
        makeUser,
        hashSync,
        randomNb,
        Code,
        makeCode,
        t,
        sendEmail,
        validators,
        Company,
        makeCompany,
        join
    });

    res.status(result.status).json(result.data);
};

module.exports = signup;
