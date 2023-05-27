const { sequelize } = require("../../../db/connect");
const { Grid } = require("../../../models/Grid");
const { Iris } = require("../../../models/Iris");
const getIrisDataInteractor = require("../../../use-case/user/getIrisDataInteractor");

const getIrisDataController = async (req, res) => {
    const { lon, lat, nb_POIs } = req.query;
    console.log(lon, lat, nb_POIs);

    const result = await getIrisDataInteractor(
        lon,
        lat,
        sequelize,
        nb_POIs
    );

    res.status(result.status).json(result.data);
};

module.exports = getIrisDataController;
