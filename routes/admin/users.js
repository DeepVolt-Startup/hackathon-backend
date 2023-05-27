const express = require("express");
const {
    getAllUsers,
} = require("../../controllers/admin/adminManagement/index");

const router = express.Router();

// users routes
router.get("/users", getAllUsers); // getting list of users

module.exports = router;
