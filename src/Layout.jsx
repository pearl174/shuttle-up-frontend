import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Layout.css";
import AuthContext from './context/AuthContext.jsx';

const Layout = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('username');
        return stored? stored : null;
    });
    const [profilePicPath, setProfilePicPath] = useState(() => {
        return localStorage.getItem("profilePicPath");
    });
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    
    return (
        <>
            <div className="flex-container-layout">
                <AuthContext value={{ user, setUser, profilePicPath, setProfilePicPath }} >
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