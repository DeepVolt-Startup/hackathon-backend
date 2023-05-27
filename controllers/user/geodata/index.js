const getIrisDataController = require("./getIrisDataController");
const getEvShareController = require("./getEvShareController");
const getPotentialScoreController = require("./getPotentialScoreController");
const potentialScoreController = require("./potentialScoreController");
const populationDensitController = require("./populationDensitController");
const averageRevenuController = require("./averageRevenuController");
const evRegistrationsController = require("./evRegistrationsController");
const chargePointsController = require("./chargePointsController");
const evChargePointsDistribController = require("./evChargePointsDistribController");
const populationAgeDistribController = require("./populationAgeDistribController");
const evStatsController = require("./evStatsController");

module.exports = {
    evStatsController,
    populationAgeDistribController,
    evChargePointsDistribController,
    chargePointsController,
    evRegistrationsController,
    averageRevenuController,
    populationDensitController,
    potentialScoreController,
    getPotentialScoreController,
    getIrisDataController,
    getEvShareController,
};
