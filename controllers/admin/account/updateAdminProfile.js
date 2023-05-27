const { Admin } = require("../../../models/Admin");
const updateAccountDetailsInteractor = require("../../../use-case/admin/updateAccountDetailsInteractor");

const updateAdminProfile = async (req, res) => {
    const { body } = req;
    const { id } = req.token;

    const result = await updateAccountDetailsInteractor(Admin, body, id);

    res.status(result.status).json(result.data);
};

module.exports = updateAdminProfile;
