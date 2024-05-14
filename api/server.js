const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Your additional middlewares here

// Connect to DB
mongoose
  .connect(process.env.PRTMONGO)
  .then(() => {
    console.log("😁 Connected to MongoDB 😁");
    app.listen(process.env.PORT, () => {
      console.log(
        `😁 Server is running on port ${process.env.PORT}, All Jokes aside 😁`
      );
    });
  })
  .catch((error) => {
    console.error(`🤬 Error connecting to MongoDB: , ${error} 🤬`);
  });

// API Setup
app.get("/", (req, res) => {
  res.send("Api is running and ready and rollin` 🎸");
});
