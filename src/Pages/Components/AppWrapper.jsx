import { useContext } from "react";
import { ThemeContext } from "../../App/ThemeProvider";
import PropTypes from "prop-types";

function AppWrapper( props ) {
    const { isDarkMode } = useContext(ThemeContext);

    return <div className={isDarkMode ? "dark" : ""}>{props.children}</div>;
}

AppWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppWrapper;