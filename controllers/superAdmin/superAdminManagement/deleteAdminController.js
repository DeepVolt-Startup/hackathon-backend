const deleteAdminInteractor = require("../../../use-case/superAdmin/deleteAdminInteractor");
const { Admin } = require("../../../models/Admin");

// selecting all users :
const deleteAdminController = async (req, res) => {
    const { id } = req.params; // email of the admin that will be deleted
    const result = await deleteAdminInteractor(id, Admin);

    res.status(result.status).json(result);
};

module.exports = deleteAdminController;
