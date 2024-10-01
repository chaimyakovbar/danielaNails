const express = require("express")
const router = express.Router()
const path = require("path")
const validScema = require("../middleware/taskScemaModel")
const schemaPost = require("../middleware/Schema")

const validatePostTodo = validScema(schemaPost)


const deleteUsersHandler = require("../handlers/users/deleteUsers");
const postUsersHandler = require("../handlers/users/postUsers");
const getUsersByIdHandler = require("../handlers/users/getUsers");


router.get("/", getUsersByIdHandler);
router.delete("/delete/:id", deleteUsersHandler);
router.post("/" , postUsersHandler);

module.exports = router;
