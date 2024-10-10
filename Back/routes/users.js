const express = require("express");
const router = express.Router();
const validScema = require("../middleware/taskScemaModel");
const { userSchema } = require("../middleware/Schema");

const validatePostUser = validScema(userSchema);

const deleteUsersHandler = require("../handlers/users/deleteUsers");
const postUsersHandler = require("../handlers/users/postUsers");
const getUsersByIdHandler = require("../handlers/users/getUsers");

router.get("/", getUsersByIdHandler);
router.delete("/delete/:id", deleteUsersHandler);
router.post("/", validatePostUser, postUsersHandler);

module.exports = router;
