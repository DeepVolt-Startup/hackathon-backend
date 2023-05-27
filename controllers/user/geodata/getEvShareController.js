const { sequelize } = require("../../../db/connect");
const { Commune } = require("../../../models/Commune");
const getEvShareInteractor = require("../../../use-case/user/getEvShareInteractor");

const getEvshareController = async (req, res) => {
    const { lon, lat } = req.query;

    const result = await getEvShareInteractor(lon, lat, sequelize, Commune);

    res.status(result.status).json(result.data);
};

module.exports = getEvshareController;
