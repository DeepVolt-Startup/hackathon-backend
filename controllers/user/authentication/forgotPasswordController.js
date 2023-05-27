const { Code, makeCode } = require("../../../models/Code");
const { User } = require("../../../models/User");
const forgotPasswordInteractor = require("../../../use-case/user/forgotPasswordInteractor");
const sendEmail = require("../../../utils/sendingEmail");
const path = require("path");

const forgotPasswordController = async (req, res) => {
    const { email } = req.body;

    // storing the email into req.body (optional)
    req.email = email;

    const randomNb = Math.floor(100000 + Math.random() * 900000);
    
    const join = path.join;

    const result = await forgotPasswordInteractor(
        email,
        User,
        makeCode,
        Code,
        randomNb,
        sendEmail,
        join
    );

    res.status(result.status).json(result.data);
};

module.exports = forgotPasswordController;

// the backend will verify if the email (already exist or not), if exist the front will redirect to verify account page then user will the resend
//the verification Code.
