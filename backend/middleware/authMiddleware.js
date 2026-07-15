const User = require("../models/User");

const {
  verifyAccessToken,
} = require("../utils/generateToken");

const authMiddleware = async (req, res, next) => {
  try {

    console.log("Authorization Header:", req.headers.authorization);
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyAccessToken(token);

    const user = await User.findById(decoded.id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    next();

  } catch (error) {

  console.log("JWT Error:", error);

  return res.status(401).json({
    success: false,
    message: error.message,
  });

}
};

module.exports = authMiddleware;