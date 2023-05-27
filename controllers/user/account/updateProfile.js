const { User } = require("../../../models/User");
const updateProfileInteractor = require("../../../use-case/user/updateProfileInteractor");

const updateProfile = async (req, res) => {
    const { id } = req.token;
    const { body } = req;

    const result = await updateProfileInteractor(User, body, id);

    res.status(result.status).json(result.data);
};

module.exports = updateProfile;
