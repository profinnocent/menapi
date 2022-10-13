// Require all installed packages that are needed
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Require DB connection file
const connectdb = require("./config/connectdb");
connectdb();

// Create all dotenv variables
const PORT = process.env.PORT || 3000;

// Create the express server
const app = express();

// Declare all app USAGES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

// Add contoller files

// Create Routes
app.use("/api/todos", require("./routes/todoRoutes"));

// Startup server and listen on a chosen port
app.listen(process.env.PORT, () => {
  console.log("Server started at PORT " + PORT);
});
