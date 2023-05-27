const express = require("express");
const {
    getEvShareController,
    getIrisDataController,
    potentialScoreController,
    populationDensitController,
    averageRevenuController,
    evRegistrationsController,
    chargePointsController,
    evChargePointsDistribController,
    populationAgeDistribController,
    evStatsController,
    tunisiaCharginStations,
} = require("../../controllers/user/geodata/index");

const router = express.Router();

// geodata routes
router.get("/geo-data/tunisia-population/site-attractiveness-score", getIrisDataController);

router.get("/geo-data/commune/commune-details/ev-share", getEvShareController);

router.post("/geo-data/iris/potential-score", potentialScoreController);

router.get("/geo-data/tunisia-population/population-density", populationDensitController);

router.post("/geo-data/grid/avg-revenu", averageRevenuController);

router.post("/geo-data/communes/ev-count", evRegistrationsController);

router.post("/geo-data/iris/charge-points", chargePointsController);

router.get("/geo-data/stations/charge-points-distribution", evChargePointsDistribController);

router.get("/geo-data/grid/age-distribution", populationAgeDistribController);

router.get("/geo-data/charging_stations/ev-stats", evStatsController);

router.get("/geo-data/tunisia-charging_stations", tunisiaCharginStations);

module.exports = router;
