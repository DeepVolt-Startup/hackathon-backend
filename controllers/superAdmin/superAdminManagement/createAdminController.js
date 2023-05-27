const bcrypt = require("bcrypt");
const createAdminInteractor = require("../../../use-case/superAdmin/createAdminInteractor");
const { Admin, makeAdmin } = require("../../../models/Admin");

// selecting all users :
const createAdminController = async (req, res) => {
    const hashSync = bcrypt.hashSync;

    const result = await createAdminInteractor(
        req.body,
        Admin,
        makeAdmin,
        hashSync,
    );

    res.status(result.status).json(result);
};

module.exports = createAdminController;
