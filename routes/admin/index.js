const users = require("./users");
const auth = require("./auth");
const accountRecovery = require("./accountRecovery");
const adminManagement = require("./adminManagement");
const companies = require("./companies");
const isAdmin = require("../../middlewares/isAdmin");
const account = require("./account");
const validToken = require("../../middlewares/verifyAccessToken");

const express = require("express");

const router = express.Router();

// admin auth
router.use(auth);

// check for valid token
router.use(validToken);

// check if it's an admin role or not
router.use(isAdmin);

router.use(accountRecovery);

// admin CRUD
router.use(adminManagement);

// get companies
router.use(companies);

// get users
router.use(users);

// admin account
router.use(account);

module.exports = router;
