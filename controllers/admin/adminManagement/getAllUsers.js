const { User } = require("../../../models/User");
const getUsersInteractor = require("../../../use-case/admin/getUsersInteractor");

// selecting all users :
const getAllUsers = async (req, res) => {
    
    const result = await getUsersInteractor(User);

    res.status(result.status).json(result);
};

module.exports = getAllUsers;
