import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("✅ MongoDB already connected");
      return;
    }

    console.log("🔹 Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "your_database_name", // Ensure you replace this with your actual DB name
    });

    console.log("✅ MongoDB Connected!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error("MongoDB Connection Failed!");
  }
};
