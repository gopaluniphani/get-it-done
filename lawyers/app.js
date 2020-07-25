var express = require("express");
var logger = require("morgan");
var cors = require("cors");
var lawyerRoutes = require("./routes/api/lawyers");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/lawyers", lawyerRoutes);

module.exports = app;
