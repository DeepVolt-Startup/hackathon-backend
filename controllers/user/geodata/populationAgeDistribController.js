const { sequelize } = require("../../../db/connect");
const populationAgeDistribInteractor = require("../../../use-case/user/populationAgeDistribInteractor");

const populationAgeDistribController = async (req, res) => {
    const { lon, lat } = req.query;

    const result = await populationAgeDistribInteractor(lon, lat, sequelize);

    res.status(result.status).json(result.data);
};

module.exports = populationAgeDistribController;
