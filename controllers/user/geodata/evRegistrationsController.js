const { sequelize } = require("../../../db/connect");
const evRegistrationsInteractor = require("../../../use-case/user/evRegistrationsInteractor");

const evRegistrationsController= async (req, res) => {
    const { inputPolygon, limit } = req.body;
    const result = await evRegistrationsInteractor(inputPolygon, sequelize, limit);

    res.status(result.status).json(result.data);
};

module.exports = evRegistrationsController;
