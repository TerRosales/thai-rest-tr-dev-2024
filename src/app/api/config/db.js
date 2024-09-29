import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if already connected, do nothing
  if (connected) {
    console.log("Already connected to database");
    return;
  }
  // Connect to the database
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "food-zone", // Explicitly connect to the correct database
    });
    connected = true;
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export default connectDB;
