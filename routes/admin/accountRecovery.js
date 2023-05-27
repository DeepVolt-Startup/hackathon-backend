const express = require("express");
const {
    confirmPasswordController,
    resendPasswordCodeController,
    adminSignIn,
    refreshToken,
    forgotPasswordAdminController,
    resetPasswordController,
} = require("../../controllers/admin/authentication/index");

const router = express.Router();

// auth routes
router.post("/auth/sign-in", adminSignIn);

router.get("/auth/refresh-token", refreshToken);

router.post("/auth/forgot-password", forgotPasswordAdminController);

router.put("/auth/password-confirmation", confirmPasswordController);

router.put("/auth/reset-password", resetPasswordController);

router.post(
    "/auth/password-reset/resend-code",
    resendPasswordCodeController,
);
module.exports = router;
