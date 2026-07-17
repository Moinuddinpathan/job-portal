const User = require("../models/User");
const Job = require("../models/Job");
const Application = require("../models/Application");


// ===============================
// Dashboard Statistics
// ===============================

const getDashboard = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const jobs = await Job.countDocuments();
    const applications = await Application.countDocuments();

   res.json({
  success: true,
  dashboard: {
    totalUsers: users,
    totalJobs: jobs,
    totalApplications: applications,
  },
});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get All Users
const getUsers = async (req, res) => {
  try {

    const users = await User.find().select("-password");

    res.json({
      success: true,
      users,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Get All Jobs
const getJobs = async (req, res) => {

  try {

    const jobs = await Job.find();

    res.json({
      success: true,
      jobs,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// Get All Applications
const getApplications = async (req, res) => {

  try {

    const applications = await Application.find()
      .populate("user", "-password")
      .populate("job");

    res.json({
      success: true,
      applications,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// Update Application Status
const updateApplicationStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const application = await Application.findById(req.params.id);

    if (!application) {

      return res.status(404).json({
        success: false,
        message: "Application not found",
      });

    }

    application.status = status;

    await application.save();

    res.json({
      success: true,
      message: "Application status updated successfully",
      application,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// Delete Job
const deleteJob = async (req, res) => {

  try {

    const job = await Job.findById(req.params.id);

    if (!job) {

      return res.status(404).json({
        success: false,
        message: "Job not found",
      });

    }

    await job.deleteOne();

    res.json({
      success: true,
      message: "Job deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


  // Delete User
const deleteUser = async (req, res) => {
  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.deleteOne();

    res.json({
      success: true,
      message: "User deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {
  getDashboard,
  getUsers,
  getJobs,
  getApplications,
  updateApplicationStatus,
  deleteJob,
  deleteUser,
};