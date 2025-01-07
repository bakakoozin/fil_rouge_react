import { useState } from "react";

function Profile() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || {}
  );
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.username === user.username ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert("Profil mis à jour avec succès !");
  };

  return (
    <main id="profile">
      <h1>Bienvenue sur ton profil "{updatedUser.username}"</h1>
      <section>
        <h2>Modifier les identifiants:</h2>
        <form className="profileForm">
          <label>
            Nom d'utilisateur :
            <input
              type="text"
              name="username"
              value={updatedUser.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Mot de passe :
            <input
              type="password"
              name="password"
              value={updatedUser.password}
              onChange={handleInputChange}
            />
          </label>
          <button type="button" onClick={saveChanges}>
            Enregistrer
          </button>
        </form>
      </section>
    </main>
  );
}

export default Profile;
