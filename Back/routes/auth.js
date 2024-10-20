const express = require("express");
const router = express.Router();
const signupHandler = require("../handlers/auth/signupHandler");
const loginHandler = require("../handlers/auth/loginHandler");

router.get("/", loginHandler);
router.post("/", signupHandler);

module.exports = router;
