import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_URL, // Use your Redis connection string
});

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));

(async () => {
  await redisClient.connect(); // Ensure Redis client connects
  console.log("✅ Connected to Redis");
})();

export { redisClient };
