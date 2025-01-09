import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomeAdmin from "./Pages/Admin/Home";
import Header from "./layout/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/Not-Found";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Details from "./Pages/Details";
import Profile from "./Pages/Profile";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isConnected = localStorage.getItem("isConnected");
    const isAdmin = localStorage.getItem("isAdmin");
    if (isConnected, isAdmin) {
      setIsLogged(true);
      setIsAdmin(true);
    }
    else if (isConnected) {
      setIsLogged(true);
    }
  }, []);

  function onClickLogoutHandler() {
    localStorage.removeItem("isConnected");
    localStorage.removeItem("isAdmin");
    setIsLogged(false);
    setIsAdmin(false);
  }

  return (
    <>
      <Header
        isLogged={isLogged}
        isAdmin={isAdmin}
        onClickLogoutHandler={onClickLogoutHandler}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route
          path="auth/login"
          element={<Login setIsLogged={setIsLogged} setIsAdmin={setIsAdmin} />}
        />
        <Route path="auth/register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="Admin/admin"
          element={
            <HomeAdmin
              isLogged={isLogged}
              isAdmin={isAdmin}
              onClickLogoutHandler={onClickLogoutHandler}
            />
          }
        />
        <Route path="/admin/*" element={<NotFound />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
