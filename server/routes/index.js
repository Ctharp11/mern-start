const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/api", function(req, res) {
  res.json({ it: "works" });
});
