const { sequelize } = require("../../../db/connect");
const { Comparison, makeComparison } = require("../../../models/Comparison");
const { ComparisonLocation } = require("../../../models/ComparisonLocation");
const { Grid } = require("../../../models/Grid");
const { Iris } = require("../../../models/Iris");
const { makeLocation, Location } = require("../../../models/Location");
const saveComparisonInteractor = require("../../../use-case/user/saveComparisonInteractor");

const saveComparison = async (req, res) => {
    const { locations, comparison, POI_score, competition_score } = req.body; // locationsInfos is an array contains the locations to compare
    const { id: user_id } = req.token; // we need the user id to save locations
    const t = await sequelize.transaction();

    const result = await saveComparisonInteractor(
        locations,
        comparison,
        Comparison,
        makeComparison,
        Location,
        makeLocation,
        ComparisonLocation,
        user_id,
        t,
        sequelize,
        Iris,
        Grid,
        POI_score,
        competition_score,
    );

    res.status(result.status).json(result.data);
};

module.exports = saveComparison;
