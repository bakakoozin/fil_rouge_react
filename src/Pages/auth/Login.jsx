import { Link, useNavigate } from "react-router-dom";
import React from "react";

function Login({ setCurrentUser }) {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  function handleName(e) {
    setUser(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(
      (u) => u.username === user && u.password === password
    );

    if (userExists) {
      localStorage.setItem("currentUser", JSON.stringify(userExists));
      setCurrentUser(userExists); // Met à jour l'état global
      navigate("/");
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <main id="login">
      <form onSubmit={submitHandler} className="loginForm">
        <label htmlFor="username">Pseudo :</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user}
          onChange={handleName}
        />

        <label htmlFor="password">Mot :</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Connexion</button>
      </form>
      <p>
        Pas encore de compte ? :{" "}
        <Link to={"/auth/register"}>Créer un compte</Link>
      </p>
    </main>
  );
}

export default Login;