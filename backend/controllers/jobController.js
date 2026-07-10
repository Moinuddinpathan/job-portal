const Job = require("../models/Job");

const addJob = async (req, res)=>{
    try {
        const job = await Job.create(req.body);

        res.status(201).json({
            success: true,
            message: "Job Added Successfully",
            Job,
        });
    }catch (error){
        res.status({
            success: false,
            message: error.message,
        });
    }
};

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



const getJobById = async (req, res)=>{

    try {
    const job = await Job.findById(req.params.id);

    if(!job) {
        return res.status(404).json({
            success: false,
            message: "Job Not Found",
        });
    }

    res.json({
        success: true,
        job,
    });
} catch (error){
    res.status(500).json({
        success: false,
        message: error.message,
    });
}
};

module.exports = {
    addJob,
    getJobs,
    getJobById,
}