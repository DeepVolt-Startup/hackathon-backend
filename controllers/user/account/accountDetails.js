const { User } = require("../../../models/User");
const accountDetailsInteractor = require("../../../use-case/user/accountDetailsInteractor");

const accountDetails = async (req, res) => {

    const result = await accountDetailsInteractor(User, req.token);

    res.status(result.status).json(result.data);
};

module.exports = accountDetails;
