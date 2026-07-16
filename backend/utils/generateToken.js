const jwt = require("jsonwebtoken");


// Generate Access Token (15 Minutes)
const generateAccessToken = (id, role) => {
  console.log("access token generated");
  
  return jwt.sign(
    {
      id,
      role,
    },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: "15m",
    },
  );
};


// Generate Refresh Token (7 Days)
const generateRefreshToken = (id, role) => {
   console.log("Refresh token generated")
  return jwt.sign(
    {
      id,
      role,
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "7d",
    }
  );
};


// Verify Access Token
const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
};


// Verify Refresh Token
const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};