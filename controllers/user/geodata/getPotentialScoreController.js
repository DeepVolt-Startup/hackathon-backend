const { sequelize } = require("../../../db/connect");
const { Iris } = require("../../../models/Iris");

const getIrisDataController = async (req, res) => {
    const { lon, lat } = req.query;
    console.log({ lon, lat });

    const result = await getPotentialScoreIteractor(lon, lat, sequelize, Iris);

    res.status(result.status).json(result.data);
};

module.exports = getIrisDataController;
