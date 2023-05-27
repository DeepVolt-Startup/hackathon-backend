const { User } = require("../../../models/User");
const sendInvitationInteractor = require("../../../use-case/admin/sendInvitationInteractor");
const path = require("path");

const sendingEmail=require("../../../utils/sendingInvitations");

const sendInviatationController = async (req, res) => {
    const join = path.join;

    const {id} = req.params;
    const {editorData}=req.body
    
  
    const result = await sendInvitationInteractor(User,sendingEmail, id,editorData,join);
    res.status(result.status).json(result.data);
};

module.exports = sendInviatationController;
