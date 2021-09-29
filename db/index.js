const mongoose = require("mongoose");

const client = mongoose;
const connect = async (URI) => {
  try {
    console.log("Connected to database! [DB-S]");
    await client.connect(URI);
  } catch (error) {
    console.log("An error ocurred [DB-C]", error);
  }
};

module.exports = connect;
