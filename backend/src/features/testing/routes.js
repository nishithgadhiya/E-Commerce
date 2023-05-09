//import functions from controller

const express = require("express");
const router = express.Router();

router.get("/test", async (req, res) => {
  try {
    res.send("success");
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});

module.exports = router;
