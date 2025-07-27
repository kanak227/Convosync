# ConvoSync - Real-Time Chat Application

![ConvoSync Logo](/frontend/public/logo.png)

ConvoSync is a modern real-time chat application that allows users to communicate instantly with each other. Built with a robust tech stack including React, Node.js, Express, MongoDB, and Socket.IO, this application provides a seamless and responsive chatting experience.

## Live Demo

🔗 [Check out the live application](https://convosync-3x73.onrender.com)

## App Screenshots
![Sneak-Peek](/frontend/public/ss.png)

## Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **User Authentication**: Secure signup, login, and logout functionality
- **Profile Management**: Update profile pictures using Cloudinary integration
- **Online Status**: See which users are currently online
- **Message History**: View past conversations with any user
- **Responsive Design**: Works on desktop and mobile devices
- **Image Sharing**: Send images in chat messages
- **Theme Support**: Multiple theme options

## Tech Stack

### Frontend
- React 19
- React Router v7
- Zustand (State Management)
- Socket.IO Client
- Tailwind CSS with DaisyUI
- Vite (Build Tool)
- Axios (HTTP Client)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- JWT Authentication
- Bcrypt.js (Password Hashing)
- Cloudinary (Image Storage)

## Project Structure

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

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Cloudinary account (for image uploads)

### Installation

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

## Deployment

The application is configured for easy deployment:

- Backend serves static frontend files in production mode
- Environment variables control configuration for different environments
- Ready for deployment on platforms like Heroku, Vercel, or any Node.js hosting service
- Currently deployed at: [convosync.vercel.app](https://convosync.vercel.app)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all the open-source libraries that made this project possible
- Inspired by modern chat applications like Slack and Discord

---

Built with ❤️ by [Kanak](https://github.com/kanak227)
