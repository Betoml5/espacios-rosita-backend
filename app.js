const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const getURI = require("./db/uri");
const compression = require("compression");
const reportRoutes = require("./components/Report/routes");
const MONGO_URI = getURI();
connectDB(MONGO_URI);

const app = express();
// Middlewares
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());

app.use("/api/report", reportRoutes);

module.exports = app;
