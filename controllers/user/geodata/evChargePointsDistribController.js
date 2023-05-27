const { sequelize } = require("../../../db/connect");
const evChargePointsDistribInteractor = require("../../../use-case/user/evChargePointsDistribInteractor");

const evChargePointsDistribController = async (req, res) => {
    const { lon, lat, radius } = req.query;
    const result = await evChargePointsDistribInteractor(
        lon,
        lat,
        sequelize,
        radius,
    );

    res.status(result.status).json(result.data);
};

module.exports = evChargePointsDistribController;
