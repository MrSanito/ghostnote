📜 GhostNote - Project Overview
GhostNote is an anonymous confession and secret message platform built using Next.js App Router, MongoDB, and Redis. It allows users to post public confessions and send self-destructing secret messages that automatically expire after being read or after 24 hours.

📝 Pages & Features
1️⃣ Home Page (/)
Simple landing page with a hero section explaining the platform.
Includes navigation to Confessions and Secret Messages.
2️⃣ Confessions Page (/confession)
Users can post anonymous confessions.
All confessions are publicly visible (no login required).
API-driven feed that dynamically loads new posts.
3️⃣ Secret Message Page (/message)
Users can generate a one-time view secret message.
Generates a unique link for sharing.
Message expires in 24 hours if not opened.
Self-destructs 2 minutes after being opened.
Live countdown timer shows time left before deletion.
4️⃣ Expired Message Page (/message/expired)
If a message has already been viewed or expired, users are redirected here.
Displays a "Message Expired" notice.
🛠️ API Endpoints & Functionality
1️⃣ Confessions API (Public Posts)
Method	Endpoint	Description
GET	/api/confession	Fetch all confessions
POST	/api/confession	Create a new confession
DELETE	/api/confession/:id	Delete a confession
2️⃣ Secret Messages API (Self-Destructing)
Method	Endpoint	Description
POST	/api/message	Create a new secret message
GET	/api/message/:id	Retrieve message (deletes after reading)
DELETE	/api/message/:id	Manually delete a message
🔹 Expiration Logic:

Messages are stored in MongoDB with a TTL index (expiresAt field).
If a message is not opened within 24 hours, it automatically deletes itself.
When a user opens the message, a 2-minute timer starts before auto-deletion.
Redis is used for fast access and temporary storage of opened messages.
🔍 SEO & Metadata
Dynamic metadata using generateMetadata() for every page.
SEO-optimized titles & descriptions for confessions and messages.
Each message page has unique metadata for better sharing and indexing.
✅ Summary
Anonymous confessions ✅
One-time secret messages ✅
Self-destructing after reading ✅
24-hour auto-expiry ✅
Live countdown timer ✅
MongoDB TTL + Redis for storage ✅
SEO-optimized metadata ✅
This project is fully functional and ready for scaling & further enhancements. 🚀
