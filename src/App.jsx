
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from "./components/Login"
import Profile from "./components/Profile"
import {ToastContainer} from "react-toastify";
import Register from './components/Register';
import { useEffect, useState } from 'react';
import { auth } from './components/Firebase';
function App() {
const [user,setuser]=useState();
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    setuser(user);
  })
})
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Navigate to="profile"/>:<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App
