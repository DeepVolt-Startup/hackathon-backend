const { User } = require("../../../models/User");
const blockAccessInteractor = require("../../../use-case/admin/blockAccessInteractor");

const blockAccessController = async (req, res) => {
    console.log("abcef : here : ", req.body)
    const id = req.params.id;
    const {has_access} = req.body ;
    const result = await blockAccessInteractor(id, User, has_access);

    res.status(result.status).json(result);
};

module.exports = blockAccessController;
