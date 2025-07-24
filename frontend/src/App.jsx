import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Settings from './pages/Settings.jsx';
import { useAuthStore } from './store/useAuthStore';
import { Loader } from 'lucide-react';
import Profile from './pages/Profile.jsx';

const App = () => {
  const {authUser , checkAuth , isCheckingAuth} = useAuthStore();
  useEffect(() =>{
    checkAuth();
  } , [checkAuth])

  if(isCheckingAuth && !authUser)
    return(
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin'/>
      </div>
    )

  return (
    <div>
      
    <Navbar/>
    <Routes>
      <Route path="/" element={authUser? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={authUser ?<Signup /> : <Navigate to="/login" />} />
      <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/login" />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>

    </div>
  )
}

export default App
