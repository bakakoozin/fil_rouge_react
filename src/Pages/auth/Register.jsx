import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App/AuthProvider";

function Register() {
  const { isUserValid, setIsUserValid, isPasswordValid, setIsPasswordValid } =
    useContext(AuthContext);
  const [pseudo, setUser] = useState("");
  const [password, setPassword] = useState("");
  const admin = false;

  const navigate = useNavigate();

  function handleUser(e) {
    setUser(e.target.value);
    if (e.target.value.length < 3) {
      setIsUserValid(false);
    } else {
      setIsUserValid(true);
    }
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 4) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isUserValid && isPasswordValid) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const newUsers = [...users, { pseudo, password, admin }];

      localStorage.setItem("users", JSON.stringify(newUsers));

      navigate("/auth/login");
    }
  }

  return (
    <main id="register">
      <form onSubmit={handleSubmit} className="auth">
        <input
          type="text"
          name="pseudo"
          value={pseudo}
          onChange={handleUser}
          placeholder="Entrer votre pseudo"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="Entrer votre mot de passe"
        />

        <button type="submit">Créer le compte</button>
      </form>

      <p>
        Vous avez déjà un compte ?{" "}
        <Link to={"/auth/login"}>Connectez-vous</Link>
      </p>
      <aside className="validation password">
        <p>L&apos;alias doit contenir :</p>
        <ul>
          <li className={!isUserValid ? "alert" : "success"}>
            3 caractères minimum
          </li>
        </ul>
        <p>Le mot de passe doit contenir :</p>
        <ul>
          <li className={!isPasswordValid ? "alert" : "success"}>
            4 caractères minimum
          </li>
        </ul>
      </aside>
    </main>
  );
}

export default Register;
