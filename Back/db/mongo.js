const { MongoClient } = require("mongodb");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

console.log(process.env.DB_PASSWORD)
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority&appName=RachelEfinger`;
const client = new MongoClient(uri);

const internal = {
  db: null,
};

// פונקציה שמתחברת למסד הנתונים
const connectToDB = async () => {
  try {
    await client.connect();
    console.log('Connected to database:', process.env.DB_NAME);
    internal.db = client.db(process.env.DB_NAME); // שומר את החיבור למסד הנתונים
    return internal.db;
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

const getDB = () => {
  return internal.db;
};

const getDbWithCollection = (collection) => {
  if (internal.db) {
    return internal.db.collection(collection); // מחזיר אוסף מהמסד נתונים
  } else {
    throw new Error('Database is not connected');
  }
};

module.exports = {
  connectToDB,
  getDB,
  getDbWithCollection,
};
