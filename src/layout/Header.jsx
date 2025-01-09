import { NavLink, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useState, } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import logo from "/logo_bakadev.jpg";

function Header(props) {
  const [isToggle, setIsToggle] = useState(false);

  function onClickHandler() {
    setIsToggle(!isToggle);
  }

  function closeMenu() {
    setIsToggle(false);
  }

  return (
    <header>
      <Link to="/" title="Go to home page">
        <img src={logo} alt="Logo Bakadev" className="logo" />
      </Link>
      {isToggle ? (
        <nav>
          <button onClick={onClickHandler} className="close-menu">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <NavLink to="/" onClick={closeMenu}>
            Accueil
          </NavLink>
          {props.isLogged ? (
            <>
              <NavLink to="/profile" onClick={closeMenu}>
                Profil
              </NavLink>
              {props.isAdmin && (
                <NavLink to="/Admin/admin" onClick={closeMenu}>
                  Admin
                </NavLink>
              )}
              <button
                onClick={props.onClickLogoutHandler}
                className="cta logout"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <NavLink to="/auth/login" onClick={closeMenu}>
              Connexion
            </NavLink>
          )}
        </nav>
      ) : (
        <button onClick={onClickHandler} className="open-menu">
          <FontAwesomeIcon icon={faBars} size="4x" />
        </button>
      )}
    </header>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  onClickLogoutHandler: PropTypes.func.isRequired,
};

export default Header;