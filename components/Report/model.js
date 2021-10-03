const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Report = new Schema({
  name: { type: String },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model("Report", Report);
