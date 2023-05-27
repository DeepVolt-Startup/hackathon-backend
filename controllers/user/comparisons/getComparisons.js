const { Comparison } = require("../../../models/Comparison");
const getComparisonsInteractor = require("../../../use-case/user/getComparisonsInteractor");

const getComparisons = async (req, res) => {
    const { id } = req.token;

    const result = await getComparisonsInteractor(Comparison, id);

    res.status(result.status).json(result.data);
};

module.exports = getComparisons;
