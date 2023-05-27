const {
    userSignInController,
    userSignUpController,
    emailConfirmation,
    forgotPasswordController,
    resetPasswordController,
    confirmPasswordController,
    resendPasswordCodeController
} = require("../../controllers/user/authentication/index");

const express = require("express");
const resendCodeController = require("../../controllers/user/authentication/resendCodeController");

const router = express.Router();

// user signup route
router.post("/auth/sign-up", userSignUpController);

// user signin route
router.post("/auth/sign-in", userSignInController);

// auth routes
router.put("/auth/email-confirmation", emailConfirmation);

router.post("/auth/resend-code", resendCodeController);

router.post("/auth/forgot-password", forgotPasswordController);

router.put("/auth/password-confirmation", confirmPasswordController);

router.put("/auth/reset-password", resetPasswordController);

router.post("/auth/password-reset/resend-code", resendPasswordCodeController);

module.exports = router;
