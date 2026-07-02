const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/users", userRoutes);

app.use("/api/auth", authRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("Job Portal API Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});