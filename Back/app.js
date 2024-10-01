const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const router = require("./routes/configRoutes");
const { connectToDB } = require("./db/mongo")
// const logger = require('./middleware/loggerWinson')

const app = express();

const initServer = async () => {
    await connectToDB();

    createServer();
    const server = http.createServer(app);
    const port = process.env.PORT || 3010;
    server.listen(port);
};

initServer();

const createServer = async () => {
    app.use(cors());

    app.use(express.json());
    app.use('/images', express.static(path.join(__dirname, 'Images')));
    app.use(router);
;}

