const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getDbWithCollection } = require("../../db/mongo");

const loginHandler = async (req, res) => {
  try {
    const { username, password } = req.body;
    const adminCollection = getDbWithCollection("admins");

    // Find admin by username
    const admin = await adminCollection.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials and user" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials and pass" });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000, // Set expiration time (e.g., 24 hours)
    });

    res.json({
      success: true,
      message: "Login successful",
      user: { id: admin._id, username: admin.username },
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

module.exports = loginHandler;
