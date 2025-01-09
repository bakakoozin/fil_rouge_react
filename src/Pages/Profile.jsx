import { useState, useEffect } from "react";

function Profile() {
  // Récupérer tous les utilisateurs depuis localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Récupérer le pseudo de l'utilisateur connecté depuis localStorage
  const [user, setUser] = useState(() => {
    const currentPseudo = localStorage.getItem("currentPseudo"); // Récupérer le pseudo de l'utilisateur connecté
    if (currentPseudo) {
      return users.find((u) => u.pseudo === currentPseudo) || {}; // Trouver l'utilisateur avec le pseudo
    }
    return {}; // Si aucun utilisateur connecté, retourner un objet vide
  });

  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => {
    setUpdatedUser(user); // Synchroniser avec l'utilisateur connecté
  }, [user]);

  const handleInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    const updatedUsers = users.map((u) =>
      u.pseudo === user.pseudo ? updatedUser : u
    );

    // Enregistrer les utilisateurs mis à jour dans localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentPseudo", updatedUser.pseudo); // Mettre à jour le pseudo de l'utilisateur connecté

    setUser(updatedUser); // Mettre à jour l'état de l'utilisateur connecté
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
      </section>
    </main>
  );
}

export default Profile;