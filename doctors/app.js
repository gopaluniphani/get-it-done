var express = require("express");
var logger = require("morgan");
var cors = require("cors");

var doctorRouter = require("./routes/api/doctors");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/doctors", doctorRouter);

module.exports = app;
