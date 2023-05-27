const { Code, makeCode } = require("../../../models/Code");
const { User } = require("../../../models/User");
const resendCodeInteractor = require("../../../use-case/user/resendCodeInteractor");
const sendEmail = require("../../../utils/sendingEmail");
const path = require("path");

const resendCodeController = async (req, res) => {
    const { email } = req.body;
    const randomNb = Math.floor(100000 + Math.random() * 900000);
    const join = path.join;

    const result = await resendCodeInteractor(
        email,
        User,
        randomNb,
        Code,
        makeCode,
        sendEmail,
        join,
    );

    res.status(result.status).json(result.data);
};

module.exports = resendCodeController;

// the backend will verify if the email (already exist or not), if exist the front will redirect to verify account page then user will the resend
//the verification Code.
