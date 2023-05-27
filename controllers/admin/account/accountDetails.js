const { Admin } = require("../../../models/Admin");
const adminAccountDetailsInteractor = require("../../../use-case/admin/adminAccountDetailsInteractor");

const accountDetails = async (req, res) => {
    const { id } = req.token;                

    const result = await adminAccountDetailsInteractor(Admin, id);

    res.status(result.status).json(result.data);
};

module.exports = accountDetails;
