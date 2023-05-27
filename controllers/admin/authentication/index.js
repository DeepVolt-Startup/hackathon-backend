const adminSignIn = require("./adminSignIn");
const refreshToken = require("./refreshToken");
const forgotPasswordAdminController = require("./forgotPasswordAdminController");
const confirmPasswordController = require("./confirmPasswordController");
const resendPasswordCodeController = require("./resendPasswordCodeController");
const resetPasswordController = require("./resetPasswordController");

module.exports = {
    resetPasswordController,
    resendPasswordCodeController,
    confirmPasswordController,
    adminSignIn,
    refreshToken,
    forgotPasswordAdminController,
};
