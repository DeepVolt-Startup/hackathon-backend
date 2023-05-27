const { Simulation } = require("../../../models/Simulation");
const deleteSimulationsInteractor = require("../../../use-case/user/deleteSimulationsInteractor");

const deleteSimulations = async (req, res) => {
    console.log("body : ", req.body);

    const { simulations } = req.body;

    const result = await deleteSimulationsInteractor(simulations, Simulation);

    res.status(result.status).json(result.data);

};

module.exports = deleteSimulations;
