const { sequelize } = require("../../../db/connect");
const { Simulation } = require("../../../models/Simulation");
const getLocationDetailsInteractor = require("../../../use-case/user/getLocationDetailsInteractor");

const getLocationDetails = async (req, res) => {
    const { id:simulation_id } = req.params;

    const result = await getLocationDetailsInteractor(
        Simulation,
        simulation_id,
        sequelize
    );

    res.status(result.status).json(result.data);
};

module.exports = getLocationDetails;
