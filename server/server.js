const express = require("express");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const logger = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/User");
const routes = require("./routes/index");

require("./handlers/passport");
require("dotenv").config({ path: "variables.env" });

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(cookieParser());

// router.get("/", (req, res) => {
//   res.json({ message: "Hello, World!" });
// });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

require("./models/User");
app.use("/api", routes);

app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
