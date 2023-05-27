const { makeLocation, Location } = require("../../../models/Location");
const { makeSimulation, Simulation } = require("../../../models/Simulation");
const { User } = require("../../../models/User");
const saveLocationInteractor = require("../../../use-case/user/saveLocationInteractor");
const saveSimulationInteractor = require("../../../use-case/user/saveSimulationInteractor");
const axios = require("axios");

const saveSimulations = async (req, res) => {
    const { simulationInfos, locationInfos } = req.body;
    
    const postRequest = axios.post;
    
    const result = await saveSimulationInteractor(
        Simulation,
        makeSimulation,
        simulationInfos,
        Location,
        makeLocation,
        locationInfos,
        saveLocationInteractor,
        User,
        postRequest,
    );

    res.status(result.status).json(result.data);
};

module.exports = saveSimulations;
