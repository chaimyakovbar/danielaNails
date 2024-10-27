const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const router = require("./routes/configRoutes");
const { connectToDB } = require("./db/mongo");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

const initServer = async () => {
  await connectToDB();

  createServer();
  const server = http.createServer(app);
  const port = process.env.PORT || 3010;
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

initServer();

const createServer = async () => {
  app.use(
    cors({
      // origin: "https://daniela-clinic.netlify.app",
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(express.json());
  app.use(cookieParser());
  app.use("/images", express.static(path.join(__dirname, "Images")));
  app.use(router);
};
