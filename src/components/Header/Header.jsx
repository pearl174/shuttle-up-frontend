import { useNavigate } from "react-router-dom";
import themeIcon from "../../assets/theme-icon.svg";
import "./Header.css";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Header = (props) => {
    const { user, setUser } = useContext(AuthContext);
    const { theme, toggleTheme } = props;
    const navigate = useNavigate();

    return (
        <div className="flex-container">
            <div className="logo" onClick={() => navigate("/")}>SHUTTLE UP</div>
            <div className="button-container">
                <button onClick={() => theme === "light" ? toggleTheme("dark") : toggleTheme("light")} className="toggle-theme" aria-label="toggle-theme"><img src={themeIcon} alt="Theme toggle" /></button>
                {user ? <LoggedIn setUser={setUser}/> : <LoggedOut />}
            </div>
        </div>
    )
}

export default Header;
