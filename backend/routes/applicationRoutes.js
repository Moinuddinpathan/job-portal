const express = require("express");

const {
    applyJob,
    myApplication,
} = require("../controllers/applicationController");

const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/", authMiddleware, applyJob);

router.get("/my", authMiddleware, myApplication);

module.exports = router;