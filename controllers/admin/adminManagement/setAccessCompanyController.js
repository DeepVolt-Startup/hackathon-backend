const { Company } = require("../../../models/Company");
const setAccessCompanyInteractor = require("../../../use-case/admin/setAccessCompanyInteractor");

const setAccessCompanyController = async (req, res) => {
  const {id} = req.params;
  const { has_access } = req.body;

  const result = await setAccessCompanyInteractor(Company, has_access, id);

  res.status(result.status).json(result);
};

module.exports = setAccessCompanyController;
