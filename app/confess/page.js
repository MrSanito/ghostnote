"use client";
import { useState } from "react";

export default function ConfessionForm() {
  const [message, setMessage] = useState("");
  const [confessionLink, setConfessionLink] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/confess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: message }),
      });

      if (!res.ok) throw new Error("Failed to submit confession");

      const data = await res.json();
      setConfessionLink(data.link);
    } catch (err) {
      console.error("❌ Error submitting confession:", err);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(confessionLink);
    alert("✅ Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          🤫 Share Your Secret
        </h1>

        <textarea
          className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type your secret confession..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          onClick={handleSubmit}
          className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
        >
          Submit Confession 🚀
        </button>

        {confessionLink && (
          <div className="mt-4 p-3 bg-gray-700 border border-gray-500 rounded-lg text-center">
            <p className="font-semibold">Your Confession Link:</p>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="text"
                value={confessionLink}
                readOnly
                className="w-full p-2 border border-gray-500 bg-gray-800 text-white rounded-lg"
              />
              <button
                onClick={handleCopy}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition"
              >
                📋 Copy
              </button>
              <a
                href={confessionLink}
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition"
              >
                🔗 Visit
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
