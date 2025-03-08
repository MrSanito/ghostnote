import mongoose from "mongoose";

export async function connectDB() {
  console.log("🔹 Connecting to MongoDB...");

  if (mongoose.connection.readyState >= 1) {
    console.log("✅ MongoDB already connected.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ghostnote",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw new Error("MongoDB Connection Failed!");
  }
}
