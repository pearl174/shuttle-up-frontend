import themeIcon from "../../assets/theme-icon.svg";
import "./Header.css";

const Header = (props) => {
    const { theme, toggleTheme } = props;

    return (
        <div className="flex-container">
            <div className="logo">SHUTTLE UP</div>
            <div className="button-container">
                <button onClick={() => theme === "light" ? toggleTheme("dark") : toggleTheme("light")} className="toggle-theme" aria-label="toggle-theme"><img src={themeIcon} alt="Theme toggle" /></button>
                <button className="primary-btn">LOGIN</button>
                <button className="primary-btn">SIGNUP</button>
            </div>
        </div>
    )
}

export default Header;
