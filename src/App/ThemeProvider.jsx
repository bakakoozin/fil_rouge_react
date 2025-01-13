import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const INITIAL_STATE = {
    isDarkMode: false,
};

function ThemeProvider(props) {
    const [isDarkMode, setIsDarkMode] = useState(INITIAL_STATE);

    function toggleDarkMode() {
        setIsDarkMode((prevMode) => !prevMode);
    }

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode])

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeContext };
export default ThemeProvider;