const express = require("express");
const {
    adminSignIn,
} = require("../../controllers/admin/authentication/index");

const router = express.Router();

// auth routes
router.post("/auth/sign-in", adminSignIn);

module.exports = router;
