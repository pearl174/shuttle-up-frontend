import { useNavigate } from "react-router-dom";
import themeIcon from "../../assets/theme-icon.svg";
import "./Header.css";

const Header = (props) => {
    const { theme, toggleTheme } = props;
    const navigate = useNavigate();

    return (
        <div className="flex-container">
            <div className="logo">SHUTTLE UP</div>
            <div className="button-container">
                <button onClick={() => theme === "light" ? toggleTheme("dark") : toggleTheme("light")} className="toggle-theme" aria-label="toggle-theme"><img src={themeIcon} alt="Theme toggle" /></button>
                <button className="primary-btn" onClick={() => navigate("/login")}>LOGIN</button>
                <button className="primary-btn" onClick={() => navigate("/signup")}>SIGNUP</button>
            </div>
        </div>
    )
}

export default Header;
