var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var lawyerRoutes = require("./routes/api/lawyers");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://lawyers-db:27017/lawyers", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MonogoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/lawyers", lawyerRoutes);

module.exports = app;
