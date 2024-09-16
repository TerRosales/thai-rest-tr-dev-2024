const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    sizes: {
      type: String,
      enum: ["small", "medium", "large", "cater", "caterLg"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    timeCook: {
      type: Number,
      required: true,
      enum: ["5", "10", "15", "20"],
    },
    heatLevel: {
      type: String,
      enum: ["mild", "medium", "hot", "extra hot", "suicide"],
    },
    alergens: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    imagePath: { type: String, required: true, isAvailable: Boolean },
    timesOrdered: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
