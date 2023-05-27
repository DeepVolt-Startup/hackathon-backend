const express = require("express");
const { getAdminsController } = require("../../controllers/superAdmin/superAdminManagement");

const router = express.Router();
// admins routes
router.get("/admins", getAdminsController);

module.exports = router;
