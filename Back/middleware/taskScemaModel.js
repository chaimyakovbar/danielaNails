const Joi = require('joi');

const validateRequest = (schema) => (req, res, next) => {
    const { body } = req;
    const { error } = schema.validate(body, { abortEarly: false });

    if (error) {
        logger.error("Validation error: ", error);
        return res.status(400).send(error.message);
    }

    next();
};

module.exports = validateRequest;
