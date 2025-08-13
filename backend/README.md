# 🚀 VentBot SaaS AI

[![Node.js](https://img.shields.io/badge/Node.js-v20-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6-green?logo=mongodb)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-blue?logo=vercel)](https://vercel.com/)

---

## 🌟 About VentBot

VentBot is an AI-powered chatbot platform for real-time conversations.  
It lets users chat with AI, view conversation history, and manage their sessions seamlessly.

- 🧠 AI-powered chats using **Groq SDK**
- 🔐 Secure authentication with **JWT & HttpOnly cookies**
- 💻 Full chat history and clear conversation functionality
- ⚡ Responsive and modern UI using **React + MUI**

---

## 📦 Tech Stack

- **Backend:** Node.js, Express, MongoDB
- **Frontend:** React, Vite, MUI
- **Deployment:** Render (backend), Vercel (frontend)
- **Authentication:** JWT with cookies
- **AI Integration:** Groq SDK

---

## 🎨 Features

- ✅ Sign Up / Login / Logout
- ✅ Persistent chat history
- ✅ Clear conversation button
- ✅ Syntax-highlighted code blocks in chat
- ✅ CORS & secure cookie handling

---

## 🔗 Try it Online

Click the button below to access the **deployed frontend**:

[![Go to Frontend](https://img.shields.io/badge/Visit%20VentBot%20Frontend-🎉-brightgreen)](https://ventbot-saas-ai.vercel.app)

---

## 🛠️ Getting Started (Dev Setup)

1. **Clone the repo**

```bash
git clone https://github.com/<your-username>/ventbot-saas-ai.git
cd ventbot-saas-ai
```
Install dependencies

```bash

npm install
Set environment variables
```
Create a .env file with:
```
PORT=5000
MONGO_URI=<your-mongo-uri>
COOKIE_SECRET=<your-cookie-secret>
GROQ_API_KEY=<your-groq-api-key>
FRONTEND_URL=https://ventbot-saas-ai.vercel.app

```
Run locally
```bash

npm run dev
```
📄 API Endpoints
```
POST /api/v1/user/login → Log in user

POST /api/v1/user/signup → Sign up user

GET /api/v1/user/auth-status → Check auth status

GET /api/v1/user/logout → Logout user

POST /api/v1/chat/new → Send new chat

GET /api/v1/chat/all-chats → Get user chats

DELETE /api/v1/chat/delete → Clear all chats
```
