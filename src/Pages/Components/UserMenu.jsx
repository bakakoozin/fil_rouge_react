import { NavLink, Link } from "react-router-dom";

function UserMenu({onLogout}) {
  
  return (
    <>
      <NavLink to={"/profile"}>Profil</NavLink>
      <Link to="/" className="disconnect" onClick={onLogout}>
        Déconnexion
      </Link>
    </>
  );
}

export default UserMenu;
