const { User } = require("../../../models/User");
const getUserInteractor = require("../../../use-case/admin/getUserInteractor");

// selecting all users :
const getUser = async (req, res) => {
    const id = req.params.id;

    const result = await getUserInteractor(id, User);

    res.status(result.status).json(result);
};

module.exports = getUser;
