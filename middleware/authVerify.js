require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.jwt_password;

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log("Token from Cookie", token);

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};

module.exports = { verifyToken };
