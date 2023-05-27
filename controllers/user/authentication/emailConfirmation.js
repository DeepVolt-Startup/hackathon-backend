const { User } = require("../../../models/User");
const { Code } = require("../../../models/Code");
const emailConfirmationInteractor = require("../../../use-case/user/emailConfirmationInteractor");
const { sequelize } = require("../../../db/connect");


const emailConfirmation = async (req, res) => {
    const t = await sequelize.transaction();

    const { user_id, code_id, typedCode } = req.body;

    const result = await emailConfirmationInteractor(User, user_id, Code, code_id, typedCode, t);

    return res.status(result.status).json(result.data);
};

module.exports = emailConfirmation;
