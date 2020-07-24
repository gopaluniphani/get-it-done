var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var lawyerRoutes = require("./routes/api/lawyers");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/lawyers", lawyerRoutes);

module.exports = app;
