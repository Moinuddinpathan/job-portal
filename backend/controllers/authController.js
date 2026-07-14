const User = require("../models/User");
const bcrypt = require("bcryptjs");
const OTP = require("../models/OTP")
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../utils/generateToken");
const sendOtpEmail = require("../utils/sendEmail");

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if OTP is verified
const otpData = await OTP.findOne({
  email,
  verified: true,
});

if (!otpData) {
  return res.status(400).json({
    success: false,
    message: "Please verify your OTP first.",
  });
}

    // Check required fields
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check existing user
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    // Delete OTP after successful registration
await OTP.deleteMany({ email });


    res.status(201).json({
      success: true,
      message: "Registration Successful",
      token: generateToken(user._id, user.role),
      user,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token: generateToken(user._id, user.role),
      user,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if(!email){
      return res.status(400).json({
        success: false,
        message: "Email is Requiresd"
      })
    }

    const existingUser = await User.findOne({ email });

    if(existingUser){
      return res.status(400).json({
        success:false,
        message:"Email is already registered"
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await OTP.deleteMany({ email })

    await OTP.create({
      email, 
      otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    });

     await sendOtpEmail(email, otp);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}


const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if(!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required"
      });
    }

    const otpData = await OTP.findOne({ email });

    if(!otpData){
      return res.status(400).json({
        success: false,
        message: "OTP not found"
      })
    }

     if (otpData.expiresAt < new Date()) {
      await OTP.deleteOne({ _id: otpData._id });

      return res.status(400).json({
        success: false,
        message: "OTP has expired",
      });
    }

    if (otpData.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    otpData.verified = true;

    await otpData.save();

    res.status(200).json({
      success: true,
      message: "OTP Verified Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = {
  sendOtp,
  verifyOtp,
  registerUser,
  loginUser,

  
  
};