import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App/AuthProvider";

function HomeAdmin() {
  const {isAdmin} = useContext(AuthContext)
  const navigate = useNavigate();
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    if (!isAdmin) {
      alert("Accès refusé. Vous n'êtes pas administrateur.");
      navigate("/");
    }
  }, [navigate, isAdmin]);

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <main id="admin">
      <h1>Interface admin</h1>
      <section>
        <h2>Liste des utilisateurs</h2>
        {users.length > 0 ? (
          <ul className="userList">
            {users.map((user, index) => (
              <li key={index}>
                {user.username} {user.isAdmin === 1 ? "(Admin)" : ""}
                <button onClick={() => deleteUser(index)}>Supprimer</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun utilisateur</p>
        )}
      </section>
    </main>
  );
}

export default HomeAdmin;
