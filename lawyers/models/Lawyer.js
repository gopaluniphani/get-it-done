const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const LawyerSchema = new Schema({
  first_name: String,
  last_name: String,
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  expertise: String,
  registered_date: { type: Date, default: Date.now },
});

module.exports = Lawyer = model("lawyer", LawyerSchema);
