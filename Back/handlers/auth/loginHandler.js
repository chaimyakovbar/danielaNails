const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getDbWithCollection } = require("../../db/mongo");

const loginHandler = async (req, res) => {
  try {
    const { username, password } = req.query;
    const adminCollection = getDbWithCollection("admins");

    // Find admin by username
    const admin = await adminCollection.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create and send JWT token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

module.exports = loginHandler;
