const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");


const corsOptions = {
  // origin: "http://localhost:3000",
  origin: "https://hotelmidasreegency.com",// Corrected URL without the closing parenthesis
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions)); // Use CORS middleware with specified options

app.use(express.json()); // Parse the JSON data and put it into req.body

app.use("/", router);

module.exports = app;
