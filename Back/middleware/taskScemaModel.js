const validateRequest = (schema) => (req, res, next) => {
  const { body } = req;
  const { error } = schema.validate(body, { abortEarly: false });

  if (error) {
    return res.status(400).send(error.message);
  }

  next();
};

module.exports = validateRequest;