# **👻 GhostNote - Anonymous Confessions & Secret Messages**

GhostNote is a **Next.js-powered** platform that allows users to post **anonymous confessions** and send **one-time view secret messages** that **self-destruct** after being read. It leverages **MongoDB (TTL index), Redis, and Next.js APIs** to manage message expiration efficiently.

---

## **🚀 Features**

### **🔹 Confessions (Public Messages)**
✅ Users can post **anonymous confessions**.  
✅ Confessions are **publicly visible** on the feed.  
✅ No login required to submit a confession.  
✅ Stored in **MongoDB** with CRUD operations.  

### **🔹 Secret Messages (Self-Destructing Notes)**
✅ Users can create **one-time view** secret messages.  
✅ A **unique shareable link** is generated for each message.  
✅ Message **auto-deletes** after being read.  
✅ **Expires in 24 hours** if left unopened.  
✅ **2-minute self-destruction timer** once opened.  
✅ **Live countdown timer** shows time left before deletion.  
✅ Utilizes **MongoDB TTL & Redis for message management**.  

### **🔹 SEO & Metadata Optimization**
✅ **Dynamic metadata** using `generateMetadata()` for each page.  
✅ **SEO-optimized titles & descriptions** for better discoverability.  
✅ **Unique metadata for every secret message** (great for sharing).  

---

## **📄 Pages & Routes**

### **🏠 Home Page (`/`)**
- Simple landing page with a **hero section** explaining the platform.
- Navigation to **Confessions** and **Secret Messages**.

### **📝 Confessions Page (`/confession`)**
- **Anonymous confession submission**.
- Publicly visible confession feed.
- Uses **MongoDB for storage & API fetching**.

### **🔒 Secret Message Page (`/message`)**
- Allows users to create **one-time view secret messages**.
- Generates a **unique shareable link**.
- Message **expires in 24 hours** if unopened.
- **Deletes automatically after 2 minutes once opened**.

### **⏳ Expired Message Page (`/message/expired`)**
- Redirects users when a **message has already been read or expired**.
- Displays a **Message Expired** notice.

---

## **📡 API Endpoints**

### **1️⃣ Confessions API** (Public Posts)
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/api/confession` | Fetch all confessions |
| `POST` | `/api/confession` | Create a new confession |
| `DELETE` | `/api/confession/:id` | Delete a confession |

### **2️⃣ Secret Messages API** (Self-Destructing)
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/message` | Create a new secret message |
| `GET` | `/api/message/:id` | Retrieve message (auto-deletes after reading) |
| `DELETE` | `/api/message/:id` | Manually delete a message |

🛑 **Expiration Logic:**  
- Messages **expire in 24 hours** if unopened (handled via MongoDB TTL index).  
- Once opened, **Redis triggers a 2-minute countdown** before deletion.  

---

## **🛠️ Tech Stack**

- **Frontend:** Next.js (App Router), Tailwind CSS, ShadCN UI
- **Backend:** Node.js, Next.js API Routes
- **Database:** MongoDB (TTL Index), Redis (Message Expiry Management)
- **Deployment:** Vercel

---

## **📌 Summary**
✅ **Anonymous Confessions** 📝  
✅ **One-Time Secret Messages** 🔒  
✅ **Auto-Expiring Messages (24h & 2min)** ⏳  
✅ **Live Countdown Timer** ⏲️  
✅ **SEO-Optimized Metadata** 🔍  
✅ **Redis + MongoDB TTL for Message Deletion** 🔥  

GhostNote is designed for **privacy, anonymity, and security**, ensuring messages remain temporary and confidential. 🚀

