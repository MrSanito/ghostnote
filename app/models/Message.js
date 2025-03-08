import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  expiresAt: { type: Date, required: true, index: { expires: 0 } }, // Auto-delete after expiry
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
