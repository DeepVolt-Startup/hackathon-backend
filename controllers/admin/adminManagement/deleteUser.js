const { User } = require("../../../models/User");
const deleteUserInteractor = require("../../../use-case/admin/deleteUserInteractor");

// selecting all users :
const deleteUser = async (req, res) => {
    const id = req.params.id;

    const result = await deleteUserInteractor(id, User);

    res.status(result.status).json(result);
};

module.exports = deleteUser;
