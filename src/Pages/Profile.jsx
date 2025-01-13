import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../App/ThemeProvider";

function Profile() {

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const { isDarkMode, toggleDarkMode} = useContext(ThemeContext);
  const [user, setUser] = useState(() => {
    const currentPseudo = localStorage.getItem("currentPseudo");
    if (currentPseudo) {
      return users.find((u) => u.pseudo === currentPseudo) || {};
    }
    return {};
  });

  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  const handleInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    const updatedUsers = users.map((u) =>
      u.pseudo === user.pseudo ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentPseudo", updatedUser.pseudo);

    setUser(updatedUser);
    alert("Profil mis à jour avec succès !");
  };

  return (
    <main id="profile">
      <h1>Bienvenue sur ton profil, {user.pseudo || "Utilisateur"} !</h1>
      <section>
        <h2>Modifier les informations :</h2>
        <form className="profileForm">
          <label>
            Nom d'utilisateur :
            <input
              type="text"
              name="pseudo"
              value={updatedUser.pseudo || ""}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Mot de passe :
            <input
              type="password"
              name="password"
              value={updatedUser.password || ""}
              onChange={handleInputChange}
            />
          </label>
          <button type="button" onClick={saveChanges}>
            Valider
          </button>
        </form>
        <button onClick={toggleDarkMode}>
					{isDarkMode ? "Light" : "Dark"} Mode
				</button>
      </section>
    </main>
  );
}

export default Profile;