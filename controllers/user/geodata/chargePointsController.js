const { sequelize } = require("../../../db/connect");
const chargePointsInteractor = require("../../../use-case/user/chargePointsInteractor");

const chargePointsController = async (req, res) => {
    const { inputPolygon, limit } = req.body;

    const result = await chargePointsInteractor(inputPolygon, sequelize, limit);

    res.status(result.status).json(result.data);
};

module.exports = chargePointsController;
