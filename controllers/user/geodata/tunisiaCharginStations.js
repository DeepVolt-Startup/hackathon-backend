const { sequelize } = require("../../../db/connect");
const tunisiaChargingStationsInteractor = require("../../../use-case/user/tunisiaChargingStationsInteractor");

const tunisiaChargingStations = async (req, res) => {
    const result = await tunisiaChargingStationsInteractor(sequelize);

    res.status(result.status).json(result.data);
};

module.exports = tunisiaChargingStations;
