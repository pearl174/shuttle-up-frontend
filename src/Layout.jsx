import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/base.css";
import "./styles/colors.css";

const Layout = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <Header theme={theme} toggleTheme={setTheme} />
            <Outlet />
        </>
    )
}

export default Layout;