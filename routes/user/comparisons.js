const express = require("express");
const {
    getComparisons,
    deleteComparison,
    getComparisonDetails,
} = require("../../controllers/user/comparisons");

const router = express.Router();

router.get("/comparisons", getComparisons);

router.delete("/comparisons", deleteComparison);

router.get("/comparisons/:id", getComparisonDetails);

module.exports = router;
