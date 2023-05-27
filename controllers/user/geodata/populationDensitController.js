const { sequelize } = require("../../../db/connect");
const { Grid } = require("../../../models/Grid");
const populationDensitInteractor = require("../../../use-case/user/populationDensitInteractor");

const populationDensitController= async (req, res) => {
    const { inputPolygon, limit } = req.body;

    const result = await populationDensitInteractor(inputPolygon, sequelize, Grid, limit);

    res.status(result.status).json(result.data);
};

module.exports = populationDensitController;
