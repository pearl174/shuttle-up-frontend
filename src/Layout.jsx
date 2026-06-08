import Header from "./components/Header/Header.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Layout.css";
import AuthContext from './context/AuthContext.jsx';
import Loading from "./pages/Loading/Loading.jsx";

const Layout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
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

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [location.pathname]);
    
    return (
        <>
            <div className="flex-container-layout">
                <AuthContext value={{ user, setUser, profilePicPath, setProfilePicPath }} >
                    <Header theme={theme} toggleTheme={setTheme} />
                    <div className="page-content">
                        {loading && <Loading />}
                        <div className="smth" style={{ visibility: loading? "hidden" : "visible" }}>
                            <Outlet />
                        </div>
                    </div>
                </AuthContext>
            </div>
        </>
    )
}

export default Layout;