const { getDbWithCollection } = require("../../db/mongo");

const getUserByIdHandler = async (req, res) => {
  const db = getDbWithCollection("users");

  try {
    const users = await db.find().toArray();
    res.send(users);
  } catch (err) {
    res.status(500).send({ err: "Internal Server Error" });
  }
};

module.exports = getUserByIdHandler;
