const { sequelize } = require("../../../db/connect");
const evStatsInteractor = require("../../../use-case/user/evStatsInteractor");

const evStatsController = async (req, res) => {
    const { inputPolygon, limit, radius } = req.body;
    const selectQueryType = sequelize.QueryTypes.SELECT;

    const result = await evStatsInteractor(
        inputPolygon,
        sequelize,
        selectQueryType,
        radius,
        limit,
    );

    res.status(result.status).json(result.data);
};

module.exports = evStatsController;
