import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 86400 * 1000),
    index: { expires: 0 },
  }, // Auto-delete after 24 hrs
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
