const express = require("express");
const router = express.Router();
const signupHandler = require("../handlers/auth/signupHandler");
const loginHandler = require("../handlers/auth/loginHandler");
const logoutHandler = require("../handlers/auth/logoutHandler");
const checkAuthStatus = require("../middleware/checkAuthStatus");

router.post("/login", loginHandler);
router.post("/", signupHandler);
router.post("/logout", logoutHandler);
router.get("/checkAuth", checkAuthStatus);

module.exports = router;
