const express = require("express");
const {
    createAdminController, deleteAdminController,
} = require("../../controllers/superAdmin/superAdminManagement");
const updateAdminController = require("../../controllers/superAdmin/superAdminManagement/updateAdminController");

const router = express.Router();

// super admin routes
router.post("/create-admin", createAdminController);

router.delete("/delete/:id", deleteAdminController);

router.put("/update-admin/:id", updateAdminController);

module.exports = router;
