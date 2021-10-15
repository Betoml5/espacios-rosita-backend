const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Report = new Schema({
  name: { type: String },
  age: { type: Number },
  lat: { type: Number },
  lng: { type: Number },
  information: String,
  bullyTypes: [
    {
      description: String,
      value: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("Report", Report);
