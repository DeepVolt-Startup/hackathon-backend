// const { ComparisonLocation } = require("../../../models/ComparisonLocation");
const getComparisonDetailsInteractor = require("../../../use-case/user/getComparisonDetailsInteractor");

const getComparisonDetails = async (req, res) => {
    const { id:comparison_id } = req.params;

    const result = await getComparisonDetailsInteractor(comparison_id);

    res.status(result.status).json(result.data);
};

module.exports = getComparisonDetails;
