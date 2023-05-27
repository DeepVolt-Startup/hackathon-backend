const express = require("express");
const verifyToken = require("../../middlewares/verifyAccessToken");
const { updateAdminProfile, updatePassword, accountDetails} = require("../../controllers/admin/account");

const router = express.Router();

// profile routes
router.put("/account", updateAdminProfile);

router.put("/account/update-password", updatePassword);

router.get("/account", accountDetails);

module.exports = router