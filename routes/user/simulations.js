const express = require("express");
const getSimulations = require("../../controllers/user/simulations/getSimulations");
const {
    saveSimulations,
    deleteSimulations,
    getLocationDetails,
} = require("../../controllers/user/simulations/index");

const router = express.Router();

// (simulation || prediction) routes
router.post("/simulations", saveSimulations);

router.get("/simulations/:id", getSimulations);

router.delete("/simulations", deleteSimulations);

router.get("/simulations/location-details/:id", getLocationDetails);

module.exports = router;
