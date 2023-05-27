const express = require("express");
const { getAllCompanies } = require("../../controllers/admin/adminManagement");
const addCompanyController = require("../../controllers/admin/adminManagement/addCompany");
const deleteCompanyController = require("../../controllers/admin/adminManagement/deleteCompanyController");
const setAccessCompanyController = require("../../controllers/admin/adminManagement/setAccessCompanyController");
const updateCompanyDetailsController = require("../../controllers/admin/adminManagement/updateCompanyDetails");

const router = express.Router();

//companies routes
router.get("/companies", getAllCompanies);

router.post("/companies", addCompanyController);

router.delete("/companies/:id", deleteCompanyController);

router.put("/companies/set-access/:id", setAccessCompanyController);

router.put("/companies/update-details/:id", updateCompanyDetailsController);

module.exports = router;
