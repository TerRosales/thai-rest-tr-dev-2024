import connectDB from "@/app/api/config/db";
import Dish from "@/app/api/models/menuitem.model";

export const GET = async () => {
  try {
    await connectDB();

    const addOns = await Dish.find({
      type: { $in: ["Appetizer", "Drink", "Soup"] },
    });
    return new Response(JSON.stringify(addOns), { status: 200 });
  } catch (err) {
    console.error("Error fetching dishes:", err); // Log the error for debugging
    return new Response(JSON.stringify({ message: "Error fetching dishes" }), {
      status: 500,
    });
  }
};
