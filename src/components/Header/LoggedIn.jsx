import "./Header.css";
import { useNavigate } from "react-router-dom";
// import { userProfilePhoto } from "../../../config.js";
import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext.jsx";

const LoggedIn = () => {
    const navigate = useNavigate();
    const { user, setUser, profilePicPath, setProfilePicPath } = useContext(AuthContext);

    const logOut = () => {
        setUser(null);
        localStorage.removeItem('user');
        setProfilePicPath(null);
        localStorage.removeItem('profilePicPath');
        navigate("/");
    }
    return (
        <>
        <button className="primary-btn" onClick={() => logOut()}>LOGOUT</button>
        <div className="profile-icon" onClick={() => navigate(`/profile/${user}`)}><img src={profilePicPath} alt="User Profile Photo" /></div>
        </>
    )
}

export default LoggedIn;