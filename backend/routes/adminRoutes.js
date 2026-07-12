const express = require("express");

const {
  getDashboard,
  getUsers,
  getJobs,
  getApplications,
  updateApplicationStatus,
  deleteJob,
} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// Dashboard
router.get(
  "/dashboard",
  authMiddleware,
  adminMiddleware,
  getDashboard
);

// Users
router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  getUsers
);

// Jobs
router.get(
  "/jobs",
  authMiddleware,
  adminMiddleware,
  getJobs
);

// Applications
router.get(
  "/applications",
  authMiddleware,
  adminMiddleware,
  getApplications
);

// Update Application Status
router.put(
  "/application/:id",
  authMiddleware,
  adminMiddleware,
  updateApplicationStatus
);

// Delete Job
router.delete(
  "/job/:id",
  authMiddleware,
  adminMiddleware,
  deleteJob
);

module.exports = router;