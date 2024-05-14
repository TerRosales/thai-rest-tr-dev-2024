const mongoose = require("mongoose");
const SizePrice = require("./sizePrice.model.js");

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
    orderSize: [SizePrice],
    heatLevel: {
      type: String,
      enum: ["mild", "medium", "hot", "extra hot", "suicide"],
    },
    alergens: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
