const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.getThings = (req, res) => {
  res.json({ it: "works" });
  console.log(req);
};
