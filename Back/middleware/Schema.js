const Joi = require("joi-oid");

const userSchema = Joi.object().keys({
  name: Joi.string().min(1).max(30).required(),
  time: Joi.string().required(),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
  note: Joi.string().optional().allow(""),
  status: Joi.string().valid("pending", "confirmed").required(),
});

const feedbackSchema = Joi.object().keys({
  name: Joi.string().min(1).max(30).required(),
  image: Joi.string().allow("").uri().optional(),
  note: Joi.string().optional().allow(""),
});

module.exports = { userSchema, feedbackSchema };
