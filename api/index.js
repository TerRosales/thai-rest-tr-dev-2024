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
    console.log("Connected to MongoDB 😁");
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `Server is running on port ${process.env.PORT}, Happy Coding! 😁`
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

// Route to create a new menu item
app.post("/dish-details", async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    const savedMenuItem = await menuItem.save();
    res.status(201).json(savedMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
