const { Code } = require("../../../models/Code");
const confirmPasswordInteractor = require("../../../use-case/admin/confirmPasswordInteractor");

const confirmPasswordController = async (req, res) => {
    const { email, code_id, typedCode } = req.body;
    
    console.log("here : ", email, req.email);

    console.log(req.body);

    const result = await confirmPasswordInteractor(email, Code, code_id, typedCode);

    console.log(result);

    return res.status(result.status).json(result.data);
};

module.exports = confirmPasswordController;
