const addCompanyInteractor = require("../../../use-case/admin/addCompanyInteractor");
const { Company, makeCompany } = require("../../../models/Company");
// const {validateCompany} = require("../../../utils/validators");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../db/connect");

const addCompanyController = async (req, res) => {
  const { domain } = req.body;

  const result = await addCompanyInteractor(
    domain,
    Company,
    sequelize,
    QueryTypes,
    makeCompany
  );
  res.status(result.status).json(result);
};
module.exports = addCompanyController;
