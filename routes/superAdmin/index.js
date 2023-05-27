const superAdminManagement = require("./superAdminManagement");
const verifyToken = require("../../middlewares/verifyAccessToken");
const admins = require("./admins");
const isSuperAdmin = require("../../middlewares/isSuperAdmin");

const express = require("express");

const router = express.Router();

//check for valid token
router.use(verifyToken);

//check if it's not super admin
router.use(isSuperAdmin);

// super admin CRUD
router.use(superAdminManagement);

// get all users
router.use(admins);

module.exports = router;
