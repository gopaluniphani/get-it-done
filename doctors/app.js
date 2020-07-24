var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var doctorRouter = require("./routes/api/doctors");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/doctors", doctorRouter);

module.exports = app;
