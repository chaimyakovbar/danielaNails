const express = require("express");
const router = express.Router();
const validScema = require("../middleware/taskScemaModel");
const { feedbackSchema } = require("../middleware/Schema");
const {
  postFeedbackHandler,
  getFeedbackHandler,
  deleteFeedbackHandler,
} = require("../handlers/feedbacks/feedbackHandlers");

const validatePostFeedback = validScema(feedbackSchema);

router.post("/", validatePostFeedback, postFeedbackHandler);
router.get("/", getFeedbackHandler);
router.delete("/:id", deleteFeedbackHandler);

module.exports = router;
