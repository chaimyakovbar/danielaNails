const bcrypt = require("bcrypt");
const { getDbWithCollection } = require("../../db/mongo");
const Joi = require("joi");

const signupSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
});

const signupHandler = async (req, res) => {
  try {
    const { error, value } = signupSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { username, password, email, phone } = value;
    const adminCollection = getDbWithCollection("admins");
    const existingAdmin = await adminCollection.findOne({
      $or: [{ username }, { email }],
    });
    if (existingAdmin) {
      return res
        .status(400)
        .json({ message: "Admin already exists with this username or email" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = {
      username,
      password: hashedPassword,
      email,
      phone,
    };

    await adminCollection.insertOne(newAdmin);
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating admin", error: error.message });
  }
};

module.exports = signupHandler;
