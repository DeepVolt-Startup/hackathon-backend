// sending invatations to the created user (samer)
const nodemailer = require("nodemailer");

// sending email to user:
async function sendEmailInvitation(email, subject, htmlCode, attachments) {
    await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        //host: "smtp-mail.outlook.com", // hostname
        //secure: false,
        host: "smtp.titan.email",
        //port: 587,
        auth: {
            user: process.env.SENDER_INV, // generated ethereal user
            pass: process.env.SENDER_PASSWORD_INV, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    await transporter.sendMail({
        from: `DeepVolt<${process.env.SENDER_INV}>`, // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        //text: "codes", // plain text body
        // attachments : attachments,
        html: htmlCode, // html body
    });
}

module.exports = sendEmailInvitation;
