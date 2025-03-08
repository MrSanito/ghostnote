"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function MessagePage() {
  const params = useParams();
  const router = useRouter();
  const messageId = params?.id;

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(120); // 2-minute countdown

  useEffect(() => {
    if (!messageId) {
      setError("Invalid request");
      console.error("❌ Error: Invalid request, no message ID");
      setLoading(false);
      return;
    }

    const fetchMessage = async () => {
      try {
        const res = await fetch(`/api/message/${messageId}`);
        const data = await res.json();
        setLoading(false);

        if (res.ok) {
          setMessage(data.message);

          // Start countdown timer
          const timer = setInterval(() => {
            setCountdown((prev) => {
              if (prev <= 1) {
                clearInterval(timer);
                router.push("/message/expired"); // Redirect after 2 minutes
              }
              return prev - 1;
            });
          }, 1000);

          return () => clearInterval(timer);
        } else {
          console.error("❌ API Error:", data.error);
          setError(data.error);
          router.push("/message/expired"); // Redirect if message not found
        }
      } catch (err) {
        setLoading(false);
        setError("Something went wrong.");
        console.error("❌ Fetch Error:", err);
        router.push("/message/expired"); // Redirect if fetch error occurs
      }
    };

    fetchMessage();
  }, [messageId, router]);

  if (loading) return <p className="text-gray-500">Loading message...</p>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md text-center">
        <h1 className="text-xl font-semibold mb-2">Secret Message</h1>
        <p className="bg-gray-700 p-4 rounded-md">{message}</p>
        <p className="mt-4 text-red-400">
          ⚠️ This message will be deleted in <strong>{countdown}</strong>{" "}
          seconds.
        </p>
      </div>
    </div>
  );
}
