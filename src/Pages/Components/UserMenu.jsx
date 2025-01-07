import { Link } from "react-router-dom";

function UserMenu({onLogout}) {
  
  return (
    <>
      <Link to={"/profile"}>Profil</Link>
      <Link to="/" className="disconnect" onClick={onLogout}>
        Déconnexion
      </Link>
    </>
  );
}

export default UserMenu;
