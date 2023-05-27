const express = require("express");

const {
  blockAccessController,
  deleteUser,
  createUserController,
  getUser,
} = require("../../controllers/admin/adminManagement/index");
const sendInviatationController = require("../../controllers/admin/adminManagement/sendInvitationController");
const updateCompanyDetailsController = require("../../controllers/admin/adminManagement/updateCompanyDetails");

const isAdmin = require("../../middlewares/authorizeUser");

const verifyToken = require("../../middlewares/verifyAccessToken");

const router = express.Router();

// admin routes :
router.post("/users/create", createUserController);

router.delete("/users/:id", deleteUser);

router.get("/users/:id", getUser);

router.put("/users/set-access/:id", blockAccessController);

router.post("/users/send-invitation/:id", sendInviatationController);

module.exports = router;
