const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BullyType = new Schema({
  description: { type: String, required: true },
});

module.exports = mongoose.model("BullyType", BullyType);
