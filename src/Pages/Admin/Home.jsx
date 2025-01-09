import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

function HomeAdmin(props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    if (!props.isAdmin) {
      alert("Accès refusé. Vous n'êtes pas administrateur.");
      navigate("/");
    }
  }, [navigate, props.isAdmin]);

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

HomeAdmin.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  onClickLogoutHandler: PropTypes.func.isRequired,
};

export default HomeAdmin;
