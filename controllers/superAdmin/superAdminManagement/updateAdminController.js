const { Admin } = require("../../../models/Admin");
const updateAdminInteractor = require("../../../use-case/superAdmin/updateAdminInteractor");

// selecting all users :
const updateAdminController = async (req, res) => {
    const { id } = req.params;
    const infos = req.body;

    const result = await updateAdminInteractor(
        Admin,
        infos,
        id,
    );

    res.status(result.status).json(result);
};

module.exports = updateAdminController;
