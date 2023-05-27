const { User } = require("../../../models/User");
const createUserInteractor = require("../../../use-case/admin/createUserIteractor");
const bcrypt = require("bcrypt");
const validators = require("../../../utils/validators");
const { Company, makeCompany } = require("../../../models/Company");
const sendingEmail = require("../../../utils/sendingInvitations");
// const sendInvitationInteractor = require("../../../use-case/admin/sendInvitationInteractor");

const path = require("path");
const join = path.join;
// selecting all users :
const createUserController = async (req, res) => {
  const hashSync = bcrypt.hashSync;
  const { sendInvitationEmail,htmlCode } = req.body;
  console.log('reeeeeeeeeeeeeeq',req.body)
  
  console.log('aaaaaaaaaaaaaaaaaaaaaaa',sendInvitationEmail)
  console.log(htmlCode)
  const result = await createUserInteractor(
    req.body,
    User,
    hashSync,
    validators,
    makeCompany,
    Company,
    sendInvitationEmail,
    sendingEmail,
    join,
    htmlCode
  );

  res.status(result.status).json(result.data);
};

module.exports = createUserController;
