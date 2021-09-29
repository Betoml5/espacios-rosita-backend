const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const getURI = require("./db/uri");
const compression = require("compression");
const MONGO_URI = getURI();
connectDB(MONGO_URI);

const app = express();
app.get("/", (req, res) => {
  res.status(200).send({ hola: "Mundo" });
});

// Middlewares
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());

module.exports = app;
