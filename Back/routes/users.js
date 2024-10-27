const express = require("express");
const router = express.Router();
const validScema = require("../middleware/taskScemaModel");
const { userSchema } = require("../middleware/Schema");

const validatePostUser = validScema(userSchema);

const deleteUsersHandler = require("../handlers/users/deleteUsers");
const postUsersHandler = require("../handlers/users/postUsers");
const getUsersByIdHandler = require("../handlers/users/getUsers");
const updateUserHandler = require("../handlers/users/updateUsers");

router.get("/", getUsersByIdHandler);
router.delete("/:id", deleteUsersHandler);
router.post("/", validatePostUser, postUsersHandler);
router.put("/:id", updateUserHandler);

module.exports = router;
