const { Comparison } = require("../../../models/Comparison");
const { ComparisonLocation } = require("../../../models/ComparisonLocation");
const deleteComparisonInteractor = require("../../../use-case/user/deleteComparisonInteractor");

const getComparisons = async (req, res) => {
    const { comparisons } = req.body;

    const result = await deleteComparisonInteractor(Comparison, comparisons, ComparisonLocation);

    res.status(result.status).json(result.data);
};

module.exports = getComparisons;
