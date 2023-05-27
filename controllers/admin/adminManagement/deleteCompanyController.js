const { Company } = require("../../../models/Company");
const deleteCompanyInteractor = require("../../../use-case/admin/deleteCompanyInteractor");

// selecting all Companys :
const deleteCompanyController = async (req, res) => {
    const id = req.params.id;

    const result = await deleteCompanyInteractor(id, Company);

    res.status(result.status).json(result);
};

module.exports = deleteCompanyController;
