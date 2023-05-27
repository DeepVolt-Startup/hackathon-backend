const { accountDetails, updateProfile, updatePassword } = require("../../controllers/user/account/index");

const express = require("express");

const router = express.Router();

// user account routes
router.get("/account", accountDetails);

router.put("/account", updateProfile);

router.put("/account/update-password", updatePassword);

module.exports = router;
