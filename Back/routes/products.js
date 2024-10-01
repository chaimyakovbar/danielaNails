const express = require("express");
const router = express.Router();
const path = require("path")


const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })


const deleteProductHandler = require("../handlers/Products/deleteProduct");
const postTodoHandler = require("../handlers/Products/postProduct");
const getTodoByIdHandler = require("../handlers/Products/getProduct");



router.get("/", getTodoByIdHandler);
router.delete("/delete/:id", deleteProductHandler);
router.post("/", upload.single('image'), postTodoHandler);

module.exports = router;
