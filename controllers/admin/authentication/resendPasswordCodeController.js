const { Code, makeCode } = require("../../../models/Code");
const { Admin } = require("../../../models/Admin");
const sendEmail = require("../../../utils/sendingEmail");
const resendPasswordCodeAdminInteractor = require("../../../use-case/admin/resendPasswordCodeAdminInteractor");
const path = require("path");

const resendPasswordCodeAdminController = async (req, res) => {
    const { email } = req.body;
    console.log(email);

    const randomNb = Math.floor(100000 + Math.random() * 900000);
    const join = path.join;

    const result = await resendPasswordCodeAdminInteractor(
        email,
        Admin,
        randomNb,
        Code,
        makeCode,
        sendEmail,
        join,
    );

    res.status(result.status).json(result.data);
};

module.exports = resendPasswordCodeAdminController;

// the backend will verify if the email (already exist or not), if exist the front will redirect to verify account page then admin will the resend
//the verification Code.
