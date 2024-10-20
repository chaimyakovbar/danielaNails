const { userSchema } = require("../../middleware/Schema"); // Adjust the path as needed
const { getDbWithCollection } = require("../../db/mongo");

const postUserHandler = async (req, res) => {
  const getDb = getDbWithCollection("users");
  try {
    const { body: newUser } = req;
    const { error, value } = userSchema.validate(newUser, {
      abortEarly: false,
    });
    if (error) {
      return res
        .status(400)
        .send({ error: "Validation error", details: error.details });
    }
    const { insertedId } = await getDb.insertOne(value);
    return res.status(201).send(insertedId);
  } catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = postUserHandler;
