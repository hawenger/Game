const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const roomID = uuidv4();
router.get("/", (req, res) => {
  res.redirect(`/${roomID}`); //(_dirname + "/index.html");
});

module.exports = router;
