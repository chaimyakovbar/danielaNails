const { userSchema } = require("../../middleware/Schema");
const { getDbWithCollection } = require("../../db/mongo");
const { ObjectId } = require("mongodb");

const updateUserHandler = async (req, res) => {
  const getDb = getDbWithCollection("users");
  const { id } = req.params;
  const userData = req.body;

  try {
    const { error, value } = userSchema.validate(userData, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).send({
        error: "Validation error",
        details: error.details,
      });
    }

    const result = await getDb.updateOne({ _id: new ObjectId(id) }, { $set: value });

    if (result.matchedCount === 0) {
      return res.status(404).send({ error: "User not found" });
    }

    return res.status(200).send({ message: "User updated successfully" });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = updateUserHandler;
