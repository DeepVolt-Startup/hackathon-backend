const { Code, makeCode } = require("../../../models/Code");
const { User } = require("../../../models/User");
const sendEmail = require("../../../utils/sendingEmail");
const resendPasswordCodeInteractor = require("../../../use-case/user/resendPasswordCodeInteractor");
const path = require("path");

const resendPasswordCodeController = async (req, res) => {
    const { email } = req.body;
    console.log(email);

    const randomNb = Math.floor(100000 + Math.random() * 900000);
    const join = path.join;

    const result = await resendPasswordCodeInteractor(
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

module.exports = resendPasswordCodeController;

// the backend will verify if the email (already exist or not), if exist the front will redirect to verify account page then user will the resend
//the verification Code.
