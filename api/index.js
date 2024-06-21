const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Import user routes
const userRoutes = require("./routes/user.route.js");
const authRoutes = require("./routes/auth.route.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.PRTMONGO)
  .then(() => {
    console.log("Connected to MongoDB 😁");
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port ${process.env.PORT}, Happy Coding! 😁`
      );
    });
  })
  .catch((error) => {
    console.error(`🤬 Error connecting to MongoDB: ${error} 🤬`);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// log in and validation, only admins can create new accounts through their dashboard.

// if login
// > menu items
// GET > can see menu items
// GET > can see menu items by category
// GET > can see menu items by number of times ordered
// GET > can see menu items by different sorting options
// POST > can create new menu items
// PUT > can update menu items
// DELETE > can delete menu items
// Specials, Reviews,and Holiday Deals.
// GET > can see all data for specials, reviews, and holiday deals.
// POST > can create new specials, reviews, and holiday deals.
// PUT > can update specials, reviews, and holiday deals.
// DELETE > can delete specials, reviews, and holiday deals.

// Route to create a new menu item
// app.post("/dish-details", async (req, res) => {
//   try {
//     const menuItem = new MenuItem(req.body);
//     const savedMenuItem = await menuItem.save();
//     res.status(201).json(savedMenuItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
