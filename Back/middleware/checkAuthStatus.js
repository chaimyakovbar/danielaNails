const jwt = require("jsonwebtoken");

const checkAuthStatus = (req, res) => {
  const token = req.cookies.authToken; // Get token from HTTP-only cookie
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: "Invalid token" });
    }

    // If the token is valid, send success response
    res.json({
      success: true,
      user: { id: user.id, username: user.username },
    });
  });
};

module.exports = checkAuthStatus;
