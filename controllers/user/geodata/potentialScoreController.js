const { sequelize } = require("../../../db/connect");
const { Iris } = require("../../../models/Iris");
const potentialScoreInteractor = require("../../../use-case/user/potentialScoreInteractor");

const potentialScoreController = async (req, res) => {
    const { inputPolygon, limit } = req.body;

    const result = await potentialScoreInteractor(inputPolygon, sequelize, Iris, limit);

    res.status(result.status).json(result.data);
};

module.exports = potentialScoreController;
