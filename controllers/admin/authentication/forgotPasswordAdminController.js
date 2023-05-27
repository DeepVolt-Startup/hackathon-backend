const { Code, makeCode } = require("../../../models/Code");
const { Admin } = require("../../../models/Admin");

const sendEmail = require("../../../utils/sendingEmail");
const path = require("path");
const forgotPasswordAdminInteractor = require("../../../use-case/admin/forgotPasswordAdminInteractor");

const forgotPasswordAdminController = async (req, res) => {
    const { email } = req.body;

    // storing the email into req.body (optional)
    req.email = email;

    const randomNb = Math.floor(100000 + Math.random() * 900000);
    
    const join = path.join;

    const result = await forgotPasswordAdminInteractor(
        email,
        Admin,
        makeCode,
        Code,
        randomNb,
        sendEmail,
        join
    );

    res.status(result.status).json(result.data);
};

module.exports = forgotPasswordAdminController;

// the backend will verify if the email (already exist or not), if exist the front will redirect to verify account page then admin will the resend
//the verification Code.
