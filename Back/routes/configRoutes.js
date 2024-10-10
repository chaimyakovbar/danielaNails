const express = require("express");
const router = express.Router();
const usersRoutes = require("./users");
const feedbackRoutes = require("./feedbacks");

router.use("/users", usersRoutes);
router.use("/feedbacks", feedbackRoutes);

module.exports = router;
