# 💬 ConvoGPT – AI Chat Application

## 🚀 Overview

**ConvoGPT** is a full-stack AI-powered chat application that allows users to interact with an AI assistant in real time. It supports multiple chat threads, dynamic message rendering, markdown support, and a smooth typing animation experience similar to ChatGPT.

The project is built with a modern tech stack and focuses on scalability, clean UI, and real-world features like thread management and API integration.

---

## ✨ Features

### ✅ Current Features

* 🧠 AI-powered chat interface
* 💬 Multiple chat threads
* 🔄 Switch between conversations
* 📝 Markdown rendering (code highlighting supported)
* ⚡ Typing animation (ChatGPT-like experience)
* 🗂️ Sidebar with chat history
* 🗑️ Delete chat threads
* 🎨 Clean and responsive UI

---

### 🚧 Upcoming Features

* 🔐 User Authentication & Authorization
* 🌗 Light & Dark Theme Toggle
* ⬇️ Dropdown Functionalities
* 🎤 Voice Input Feature (OpenAI APIs integration)
* 🌍 Deployment (Production-ready hosting)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Context API (State Management)
* CSS (Custom Styling)
* React Markdown
* Rehype Highlight (Code Syntax Highlighting)

### Backend

* Node.js
* Express.js

### Other Tools

* UUID (for unique thread IDs)
* REST APIs
* OpenAI API (planned for voice feature)



---

## ⚙️ Run Locally

### 1️⃣ Clone the repository

```bash
git clone [https://github.com/your-username/convogpt.git](https://github.com/Coder-Anindita/ai-chat-platform.git)
cd convogpt
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint              | Description           |
| ------ | --------------------- | --------------------- |
| GET    | `/api/v1/threads`     | Get all threads       |
| GET    | `/api/v1/threads/:id` | Get a specific thread |
| DELETE | `/api/v1/threads/:id` | Delete a thread       |
| POST   | `/api/v1/chat`        | add a chat to a thread|

---

## 🎯 Key Highlights

* Real-world chat architecture with thread-based conversations
* Clean separation of frontend and backend
* Efficient state management using Context API
* Smooth UI/UX inspired by ChatGPT
* Scalable structure for adding advanced features

---

## 👩‍💻 Author

**Anindita Chakraborty**
📧 Email: [aninditac1912@gmail.com](mailto:aninditac1912@gmail.com)
🔗 GitHub: https://github.com/Coder-Anindita

---

## 📌 Future Scope

This project is continuously evolving and aims to include:

* Full authentication system (JWT-based)
* Voice-enabled AI interaction
* Advanced UI enhancements
* Production deployment with CI/CD

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🛠️ Contribute

---

## 📜 License

This project is open-source and available under the MIT License.
