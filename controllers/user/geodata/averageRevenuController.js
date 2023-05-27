const { sequelize } = require("../../../db/connect");
const averageRevenuInteractor = require("../../../use-case/user/averageRevenuInteractor");

const averageRevenuController = async (req, res) => {
    const { inputPolygon, limit } = req.body;

    const result = await averageRevenuInteractor(inputPolygon, sequelize, limit);

    res.status(result.status).json(result.data);
};

module.exports = averageRevenuController;
