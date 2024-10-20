const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const feedbackRoutes = require("./feedbacks");
const authRoutes = require("./auth");

router.use("/users", usersRoutes);
router.use("/feedbacks", feedbackRoutes);
router.use("/admins", authRoutes);

module.exports = router;
