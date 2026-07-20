const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    resume: {
      type: String,
      required: true,
    },

    skills: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    expectedSalary: {
      type: String,
      required: true,
    },

    linkedIn: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    coverLetter: {
      type: String,
      default: "",
    },
    
    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Selected", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);