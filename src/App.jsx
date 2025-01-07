import {Routes, Route} from 'react-router-dom'
import { useState } from "react";
import Header from './Pages/Header'
import Home from './Pages/Home'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import Details from './Pages/Details'
import Profile from './Pages/Profile'
import Admin from './Admin/Admin'

function App() {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );
  
  return (
    <>
    <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="details/:id" element={<Details/>} />
        <Route path="auth/login" element={<Login setCurrentUser={setCurrentUser}/>} />
        <Route path="auth/register" element={<Register/>} />
        <Route path="profile" element={<Profile/>}/>
        <Route path="admin" element={<Admin />} />
    </Routes>
    </>
  )
}

export default App