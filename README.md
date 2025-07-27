# ✨ ConvoSync - Real-Time Chat Application ✨

<p align="center">
  <img src="/frontend/public/logo.png" alt="ConvoSync Logo" width="200" height="auto">
</p>

<p align="center">
  <b>ConvoSync</b> is a modern real-time chat application that allows users to communicate instantly with each other. Built with a robust tech stack including React, Node.js, Express, MongoDB, and Socket.IO, this application provides a seamless and responsive chatting experience.
</p>

## 🚀 Live Demo

<p align="center">
  <a href="https://convosync-3x73.onrender.com" target="_blank">🔗 Check out the live application</a>
</p>

## 📱 App Screenshots

<p align="center">
  <img src="/frontend/public/ss.png" alt="Sneak-Peek" width="80%" height="auto">
  <img src="/frontend/public/ss2.png" alt="Sneak-Peek" width="80%" height="auto">
</p>

## ✅ Features

- 💬 **Real-time Messaging**: Instant message delivery using Socket.IO
- 🔐 **User Authentication**: Secure signup, login, and logout functionality
- 👤 **Profile Management**: Update profile pictures using Cloudinary integration
- 🟢 **Online Status**: See which users are currently online
- 📜 **Message History**: View past conversations with any user
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🖼️ **Image Sharing**: Send images in chat messages
- 🎨 **Theme Support**: Multiple theme options

## 🛠️ Tech Stack

<table>
  <tr>
    <td valign="top">
      <h3>🌐 Frontend</h3>
      <ul>
        <li>⚛️ React 19</li>
        <li>🧭 React Router v7</li>
        <li>🗃️ Zustand (State Management)</li>
        <li>🔌 Socket.IO Client</li>
        <li>🎨 Tailwind CSS with DaisyUI</li>
        <li>⚡ Vite (Build Tool)</li>
        <li>🔄 Axios (HTTP Client)</li>
      </ul>
    </td>
    <td valign="top">
      <h3>⚙️ Backend</h3>
      <ul>
        <li>📦 Node.js</li>
        <li>🚂 Express.js</li>
        <li>🍃 MongoDB with Mongoose</li>
        <li>🔌 Socket.IO</li>
        <li>🔑 JWT Authentication</li>
        <li>🔒 Bcrypt.js (Password Hashing)</li>
        <li>☁️ Cloudinary (Image Storage)</li>
      </ul>
    </td>
  </tr>
</table>

## 📂 Project Structure

```
├── backend/                # Backend server code
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── lib/            # Utilities and configurations
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── index.js        # Server entry point
│   ├── .env.example        # Environment variables template
│   └── package.json        # Backend dependencies
│
├── frontend/               # Frontend React application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── lib/            # Utilities and helpers
│   │   ├── pages/          # Page components
│   │   ├── store/          # Zustand state stores
│   │   └── App.jsx         # Main application component
│   └── package.json        # Frontend dependencies
│
└── package.json            # Root package.json
```

## 🚀 Getting Started

### 📋 Prerequisites

- 📦 Node.js (v16 or higher)
- 🍃 MongoDB
- ☁️ Cloudinary account (for image uploads)

### 💻 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/kanak227/Convosync.git
   cd convosync
   ```

2. Install dependencies
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables
   - Copy `.env.example` to `.env` in the backend directory
   - Fill in your MongoDB URI, JWT secret, and Cloudinary credentials

4. Start the development servers
   ```bash
   # Start backend server (from backend directory)
   npm run dev
   
   # Start frontend server (from frontend directory)
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🚀 Deployment

The application is configured for easy deployment:

- 🔄 Backend serves static frontend files in production mode
- ⚙️ Environment variables control configuration for different environments
- 🌐 Deployed on Render

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Thanks to all the open-source libraries that made this project possible
- Inspired by modern chat applications like Slack and Discord

---

<p align="center">Built with ❤️ by <a href="https://github.com/kanak227">Kanak</a></p>

<p align="center">
  <a href="https://github.com/kanak227/Convosync/stargazers">⭐ Star this project</a> •
  <a href="https://github.com/kanak227/Convosync/issues">🐛 Report Bug</a> •
  <a href="https://github.com/kanak227/Convosync/issues">✨ Request Feature</a>
</p>
