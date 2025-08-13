# MERN Stack AI Chatbot

An **AI-powered chatbot** inspired by ChatGPT, built using the **MERN stack** (MongoDB, Express.js, React, Node.js) and integrated with the **Groq API** for fast, efficient responses.

## 📌 Features

- **AI-Powered Conversations** – Uses Groq API to generate chatbot responses in real time.
- **Message Persistence** – Every user message is stored in MongoDB for retrieval and deletion.
- **User Authentication** – Secure login/signup using:
  - JWT tokens
  - HTTP-only cookies
  - Signed cookies
  - Password hashing with bcrypt
- **Middleware Chains** – Layered request validation and security.
- **Customizable** – Easily adapt prompts, personalities, and data handling.
- **MERN Architecture** – Cleanly separated frontend (React) and backend (Node.js + Express).

---

## 🛠 Tech Stack

**Frontend**  
- React + Vite  
- TypeScript  
- Axios (API calls)  
- Context API  
- TailwindCSS   

**Backend**  
- Node.js + Express.js  
- TypeScript  
- MongoDB + Mongoose  
- Groq API (AI responses)  
- JWT & bcrypt for authentication  

**Database**  
- MongoDB Atlas  


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/anukriti2306/ventbot-saas-ai.git
cd ventbot-saas-ai
```
### 2. Install dependencies
# Backend

```bash

cd backend
npm install
```
# Frontend
```bash

cd ../frontend
npm install
```
### 3. Set up environment variables
Create a .env file inside the server/ folder:

```.env

PORT=8080
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
COOKIE_SECRET=your_cookie_secret
```
### 4. Run the development servers
# Backend:

```bash

cd backend
npm run dev
```
# Frontend:

```bash
cd ../frontend
npm start
```


### 🔒 Security Notes
JWT tokens are stored in HTTP-only cookies to prevent XSS attacks.

Passwords are hashed with bcrypt before storage.

Middleware chains validate and sanitize requests.

API keys and secrets should never be committed to source control.

### 🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request.
Before contributing:

Follow existing code style.

Write clear commit messages.

Test changes locally.
