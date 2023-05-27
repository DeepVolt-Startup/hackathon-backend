const { Company } = require("../../../models/Company");
const updateCompanyDetailsInteractor = require("../../../use-case/admin/updateCompanyDetailsdInteractor");

const updateCompanyDetailsController = async (req, res) => {
  const {id} = req.params;
  const { body } = req;
  
  console.log('coooooooooooooompany :',body)

  const result = await updateCompanyDetailsInteractor(Company, body, id);

  res.status(result.status).json(result);
};

module.exports = updateCompanyDetailsController;
