const { MongoClient } = require("mongodb");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority&appName=DanielaFashion`;
const client = new MongoClient(uri);

const internal = {
  db: null,
};

// function to connect to the DB
const connectToDB = async () => {
  try {
    await client.connect();
    internal.db = client.db(process.env.DB_NAME); // save the connection
    return internal.db;
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

const getDB = () => {
  return internal.db;
};

const getDbWithCollection = (collection) => {
  if (internal.db) {
    console.log(internal.db.collection(collection));
    return internal.db.collection(collection); // return the collcetion
  } else {
    throw new Error("Database is not connected");
  }
};

module.exports = {
  connectToDB,
  getDB,
  getDbWithCollection,
};
