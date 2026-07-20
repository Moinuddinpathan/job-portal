const express = require("express");
const upload = require("../middleware/uploadResume");

const {
    applyJob,
    myApplication,
} = require("../controllers/applicationController");

const authMiddleware = require("../middleware/authMiddleware")


const router = express.Router();

router.post("/", authMiddleware, upload.single("resume"), applyJob);

router.get("/my", authMiddleware, myApplication);

module.exports = router;