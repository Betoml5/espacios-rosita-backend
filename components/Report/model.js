const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Report = new Schema({
  name: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  types: [
    {
      type: Schema.Types.ObjectId,
      ref: "typeBully",
    },
  ],
});

module.exports = mongoose.model("Report", Report);
