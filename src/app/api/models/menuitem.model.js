import { Schema, model, models } from "mongoose";

const DishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Appetizer", "Main Dish", "Dessert", "Drink"], // Restrict to specific types
    },
    menu: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String], // Array of strings for ingredients
      required: true,
    },
    allergens: {
      type: [String], // Array of allergens (e.g., "peanuts", "gluten")
    },
    heat_level: {
      type: String,
      enum: ["Low", "Medium", "High", "None"], // Limited to specific values
      default: "None", // Default value
    },
    meat_selection: {
      type: [String], // Array of meat options (e.g., "Chicken", "Beef", etc.)
      required: false, // Optional, as some dishes may not have meat
    },
    veggie_selection: {
      type: [String], // Array of veggie options (e.g., "Broccoli", "Carrots", etc.)
      required: false, // Optional, as some dishes may not have veggies
    },
    description: {
      type: String,
      required: true,
      trim: true, // Trims any extra spaces
    },
    created_at: {
      type: Date,
      default: Date.now, // Auto-assign the current date
    },
  },
  {
    timestamps: true, // Automatically assign createdAt and updatedAt fields
  }
);

const Dish = models.Dish || model("Dish", DishSchema);

export default Dish;
