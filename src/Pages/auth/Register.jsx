import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  function handleName(e) {
    setUser(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  // function submitHandler(e) {
  //   e.preventDefault();
  //   console.log(`New User : ${user}, Password: ${password}`);
  //   const userData = {
  //     username: user,
  //     password: password,
  //   };
  //   localStorage.setItem("user", JSON.stringify(userData));
  //   console.log("User data saved to localStorage:", userData);
  function submitHandler(e) {
    e.preventDefault();

    if (!user || !password) {
      alert("Veuillez saisir un nom d'utilisateur et un mot de passe.");
      return;
    }

    // Récupérer les utilisateurs existants depuis localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Vérifier si le nom d'utilisateur existe déjà
    const userExists = existingUsers.find((u) => u.username === user);
    if (userExists) {
      alert("Ce nom d'utilisateur existe déjà. Veuillez en choisir un autre.");
      return;
    }

    // Ajouter le nouvel utilisateur
    const newUser = { username: user, password };
    const updatedUsers = [...existingUsers, newUser];

    // Mettre à jour localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log("Utilisateur enregistré :", newUser);
	navigate("../../auth/login");
  }

  return (
    <main id="register">
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Pseudo :</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user}
          onChange={handleName}
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Créer compte</button>
      </form>
    </main>
  );
}

export default Register;
