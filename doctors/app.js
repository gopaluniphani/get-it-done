var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var doctorRouter = require("./routes/api/doctors");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://doctors-db:27017/doctors", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MonogoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/doctors", doctorRouter);

module.exports = app;
