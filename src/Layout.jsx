import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Layout.css";

const Layout = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <div className="flex-container-layout">
                <Header theme={theme} toggleTheme={setTheme} />
                <div className="page-content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout;