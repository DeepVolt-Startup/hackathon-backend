const { sequelize } = require("../../../db/connect");
const { Grid } = require("../../../models/Grid");
const { Iris } = require("../../../models/Iris");
const getIrisDataInteractor = require("../../../use-case/user/getIrisDataInteractor");

const getIrisDataController = async (req, res) => {
    const { lon, lat, POI_score, competition_score } = req.query;

    const result = await getIrisDataInteractor(
        lon,
        lat,
        sequelize,
        Iris,
        Grid,
        POI_score,
        competition_score,
    );

    res.status(result.status).json(result.data);
};

module.exports = getIrisDataController;
