const { Simulation } = require("../../../models/Simulation");
const getSimulationsInteractor = require("../../../use-case/user/getSimulationsInteractor");

const getSimulations = async (req, res) => {
    const { id } = req.params;

    const result = await getSimulationsInteractor(
        Simulation,
        id,
    );

    res.status(result.status).json(result.data);
};

module.exports = getSimulations;
