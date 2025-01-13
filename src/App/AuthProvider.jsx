import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthProvider(props) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUserValid, setIsUserValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  function onClickLogoutHandler() {
    localStorage.removeItem("isConnected");
    localStorage.removeItem("isAdmin");
    setIsLogged(false);
    setIsAdmin(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        isAdmin,
        setIsAdmin,
        onClickLogoutHandler, 
        isUserValid, 
        setIsUserValid, 
        isPasswordValid, 
        setIsPasswordValid
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = { children: PropTypes.node.isRequired };

export { AuthContext };
export default AuthProvider;
