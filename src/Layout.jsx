import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Layout.css";
import AuthContext from './context/AuthContext.jsx';

const Layout = () => {
    const [theme, setTheme] = useState("light");
    const [user, setUser] = useState(null);
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <div className="flex-container-layout">
                <AuthContext value={{ user, setUser }} >
                    <Header theme={theme} toggleTheme={setTheme} />
                    <div className="page-content">
                        <Outlet />
                    </div>
                </AuthContext>
            </div>
        </>
    )
}

export default Layout;