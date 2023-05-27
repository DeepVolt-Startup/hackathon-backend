const express = require("express");
const {
    deleteLocations,
    saveLocation,
    getLocations,
    saveComparison,
} = require("../../controllers/user/locations");

const router = express.Router();

// location routes
router.post("/locations", saveLocation);

router.get("/locations/:id", getLocations);

router.delete("/locations", deleteLocations);

router.post("/locations/save-comparison", saveComparison);

module.exports = router;
