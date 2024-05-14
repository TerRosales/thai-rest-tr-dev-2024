const mongoose = require("mongoose");

const sizePriceSchema = new mongoose.Schema({
  size: {
    type: String,
    enum: ["small", "medium", "large", "cater", "side"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const SizePrice = mongoose.model("SizePrice", sizePriceSchema);

module.exports = SizePrice;
