const { getDbWithCollection } = require("../../db/mongo");

const postFeedbackHandler = async (req, res) => {
  const getDb = getDbWithCollection("feedbacks");
  try {
    const { body: newFeedback } = req;
    const { insertedId } = await getDb.insertOne(newFeedback);
    return res.status(201).send(insertedId);
  } catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const getFeedbackHandler = async (req, res) => {
  const db = getDbWithCollection("feedbacks");
  try {
    const feedbacks = await db.find().toArray();
    res.send(feedbacks);
  } catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const deleteFeedbackHandler = async (req, res) => {
  const getDb = getDbWithCollection("feedbacks");
  const id = req.params.id;
  try {
    const result = await getDb.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).send("Feedback not found");
    }
    res.send({ id: id, message: "Delete operation completed" });
  } catch (err) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = { postFeedbackHandler, getFeedbackHandler, deleteFeedbackHandler };