const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(_dirname + "/index.html");
});

module.exports = router;
