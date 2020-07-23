const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const DoctorSchema = new Schema({
  first_name: String,
  last_name: String,
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  specialization: String,
  registered_data: { type: Date, default: Date.now },
});

const Doctor = model("doctors", DoctorSchema);
module.exports = Doctor;
