import { NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import logo from "/logo_bakadev_invert.jpg";
import logoDark from "/logo_bakadev.jpg";
import { AuthContext } from "../App/AuthProvider";
import { CartContext } from "../App/CartProvider";
import { ThemeContext } from "../App/ThemeProvider";

function Header() {
  const { isLogged, isAdmin, onClickLogoutHandler } = useContext(AuthContext);
  const [isToggle, setIsToggle] = useState(false);
  const { cart } = useContext(CartContext);
  const { isDarkMode } = useContext(ThemeContext);

  function onClickHandler() {
    setIsToggle(!isToggle);
  }

  function closeMenu() {
    setIsToggle(false);
  }

  return (
    <header>
      <Link to="/" title="Retour à l'accueil">
        <img
          src={isDarkMode ? logo : logoDark}
          alt="Logo Bakadev"
          className="logo"
        />
      </Link>
      {isToggle ? (
        <nav>
          <button onClick={onClickHandler} className="close-menu">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <NavLink to="/" onClick={closeMenu}>
            Accueil
          </NavLink>
          <NavLink to="/cart" end onClick={closeMenu}>
            Panier ({cart.length})
          </NavLink>
          {isLogged ? (
            <>
              <NavLink to="/profile" onClick={closeMenu}>
                Profil
              </NavLink>
              {isAdmin && (
                <NavLink to="/Admin/admin" onClick={closeMenu}>
                  Admin
                </NavLink>
              )}
              <button onClick={onClickLogoutHandler} className="cta logout">
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

export default Header;
