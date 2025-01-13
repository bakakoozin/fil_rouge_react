import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "./App/AuthProvider";

import HomeAdmin from "./Pages/Admin/Home";
import Header from "./layout/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/Not-Found";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Details from "./Pages/Details";
import Profile from "./Pages/Profile";
import AppWrapper from "./Pages/Components/AppWrapper";
import Cart from "./Pages/Cart";

function App() {
  const { setIsLogged, setIsAdmin } = useContext(AuthContext);

  useEffect(() => {
    const isConnected = localStorage.getItem("isConnected");
    const isAdmin = localStorage.getItem("isAdmin");
    if (isConnected, isAdmin) {
      setIsLogged(true);
      setIsAdmin(true);
    } else if (isConnected) {
      setIsLogged(true);
    }
  }, []);

  return (
    <>
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="Admin/admin" element={<HomeAdmin />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/admin/*" element={<NotFound />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </AppWrapper>
    </>
  );
}

export default App;
