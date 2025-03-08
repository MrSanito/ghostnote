import { connectDB } from "@/lib/db";
import Message from "@/app/models/Message";
export async function POST(req) {
  try {
    await connectDB();

    const { text } = await req.json();
    if (!text) {
      return new Response(
        JSON.stringify({ error: "Message text is required" }),
        { status: 400 }
      );
    }

    const newMessage = new Message({
      text,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Auto-delete after 24 hours
    });

    await newMessage.save();

    // ✅ Generate the message link
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";
    const messageLink = `${baseUrl}/message/${newMessage._id}`;

    return new Response(JSON.stringify({ link: messageLink }), { status: 201 });
  } catch (error) {
    console.error("❌ API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;
    const message = await Message.findById(id);

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message not found or expired" }),
        { status: 404 }
      );
    }

    // ✅ Delete the message after reading (self-destruct)
    await Message.findByIdAndDelete(id);

    return new Response(JSON.stringify({ message: message.text }), {
      status: 200,
    });
  } catch (error) {
    console.error("❌ API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
