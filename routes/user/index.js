const auth = require("./auth");
const accountRecovery = require("./accountRecovery");
const account = require("./acccount");
const locations = require("./locations");
const simulations = require("./simulations");
const geoData = require("./geo-data");
const comparisons = require("./comparisons");
const authorizeUser = require("../../middlewares/authorizeUser");
const verifyToken = require("../../middlewares/verifyAccessToken");

const express = require("express");

const router = express.Router();

// user auth
router.use(auth);

// check for a valid token
router.use(verifyToken);

// check for user access
router.use(authorizeUser);

// account recovery
router.use(accountRecovery);

// user CRUD
router.use(account);

// location CRUD
router.use(locations);

// comparison CRUD
router.use(comparisons);

// (simulations || predictions) CRUD
router.use(simulations);

// geodata CRUD
router.use(geoData);

module.exports = router;
