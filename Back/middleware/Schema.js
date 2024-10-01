const { number } = require("joi");
const Joi = require("joi-oid");
const JoiObjectId = require("joi-objectid")(Joi);

const schemaPost = Joi.object().keys({
  name: Joi.string().min(1).max(30).optional(),
  number: Joi.number().required(),
  email: Joi.string().email().required(),
  note: Joi.array().items(Joi.string()).optional(),
});

module.exports = { schemaPost };
