const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BullyType = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("BullyType", BullyType);
