// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token) return res.status(401).json({ message: "Access Denied" });

//   try {
//     const verified = jwt.verify(token, "9f532b44652907ceb901f7dc9baa7bca544533a73b197549cb19962143f3a73434e61b113403b9b5713ac36c8fc17653ed7168b33010f55298c195838118a61a");
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).json({ message: "Invalid Token" });
//   }
// };

// module.exports = authMiddleware;

const jwt = require("jsonwebtoken");

// Hardcoded JWT secret (must match the one used during token creation)
const JWT_SECRET = "9f532b44652907ceb901f7dc9baa7bca544533a73b197549cb19962143f3a73434e61b113403b9b5713ac36c8fc17653ed7168b33010f55298c195838118a61a";

const authMiddleware = (req, res, next) => {
  // Get token from "Authorization" header (can be "Bearer <token>" or just "<token>")
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  // Extract token if it's in "Bearer <token>" format
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    // Verify token
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Add user info to request
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
