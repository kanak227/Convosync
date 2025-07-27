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
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/useThemeStore';

const App = () => {
  const {authUser , checkAuth , isCheckingAuth} = useAuthStore();
  const {theme} = useThemeStore();
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
    <div data-theme={theme}>
      
    <Navbar/>
    <Routes>
      <Route path="/" element={authUser? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={authUser ? <Navigate to="/" />: <Login/> } />
      <Route path="/signup" element={authUser ? <Navigate to="/" />: <Signup/>} />
      <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/login" />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>

    <Toaster/>

    </div>
  )
}

export default App
