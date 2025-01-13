import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { AuthContext } from "../../App/AuthProvider";

function Login() {
  const {setIsLogged, setIsAdmin} = useContext(AuthContext)
  const navigate = useNavigate();

  const pseudoRef = useRef();
  const passRef = useRef();

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const pseudo = pseudoRef.current.value;
    const password = passRef.current.value;

    const user = users.find((user) => user.pseudo === pseudo);

    if (!user) {
      setError("Pseudo incorrect");
      return;
    }
  
    if (user.password !== password) {
      setError("Mot de passe incorrect");
      return;
    }
  
    localStorage.setItem("isConnected", true);
    localStorage.setItem("currentPseudo", user.pseudo);
    setIsLogged(true);

    if (user.admin === true) {
      localStorage.setItem("isAdmin", true);
      setIsAdmin(true);
    } else {
      localStorage.removeItem("isAdmin");
      setIsAdmin(false);
    }
    navigate("/");
  }

  return (
    <main id="login">
      <form onSubmit={handleSubmit} className="auth">
        <input type="text" ref={pseudoRef} placeholder="Entrer votre pseudo" />
        <input
          type="password"
          ref={passRef}
          placeholder="Entrer votre mot de passe"
        />

        {error && <p>{error}</p>}

        <button type="submit">Se connecter</button>
      </form>
      <p>
        Pas de compte ? <Link to={"/auth/register"}>Créer un compte</Link>
      </p>
    </main>
  );
}

export default Login;
