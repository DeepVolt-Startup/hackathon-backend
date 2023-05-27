const { Admin } = require("../../../models/Admin");
const getAdminsInteractor = require("../../../use-case/superAdmin/getAdminsInteractor");

// selecting all users :
const getAdminsController = async (req, res) => {
    console.log(req);
    const result = await getAdminsInteractor(Admin);

    res.status(result.status).json(result);
};

module.exports = getAdminsController;
