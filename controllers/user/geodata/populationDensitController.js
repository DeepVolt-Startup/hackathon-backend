const { sequelize } = require("../../../db/connect");
const { Grid } = require("../../../models/Grid");
const populationDensitInteractor = require("../../../use-case/user/populationDensitInteractor");

const populationDensitController= async (req, res) => {
    const result = await populationDensitInteractor(sequelize);

    res.status(result.status).json(result.data);
};

module.exports = populationDensitController;
