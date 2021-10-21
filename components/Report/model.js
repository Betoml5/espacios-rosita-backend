const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Report = new Schema({
  name: { type: String },
  age: { type: Number },
  street: { type: String },
  neighborhood: { type: String },
  city: { type: String },
  street: { type: String },
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
