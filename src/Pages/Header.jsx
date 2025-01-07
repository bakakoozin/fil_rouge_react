import { NavLink } from "react-router-dom";
import UserMenu from "./Components/UserMenu";
import AdminMenu from "../Admin/AdminMenu";

function Header({ currentUser, setCurrentUser }) {
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null); // Réinitialise l'état utilisateur
  };

  return (
    <header>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        {!currentUser && <NavLink to="/auth/login">Connexion</NavLink>}
        {currentUser && (
          <>
            <UserMenu onLogout={handleLogout} />
            {currentUser?.isAdmin === 1 && <AdminMenu />}
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;