const {
    refreshTokenController,
} = require("../../controllers/user/authentication/index");

const express = require("express");

const router = express.Router();

// refresh token route
router.get(
    "/auth/refresh-token",
    refreshTokenController,
);

module.exports = router;
