const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Report = new Schema({
  name: { type: String },
  age: { type: Number },
  street: { type: String },
  address: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  information: String,
  gender: { type: String },
  bullyTypes: [
    {
      description: String,
      value: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("Report", Report);
