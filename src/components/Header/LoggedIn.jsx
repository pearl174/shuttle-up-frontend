import "./Header.css";
import { useNavigate } from "react-router-dom";
import { userProfilePhoto } from "../../../config.js";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext.jsx";

const LoggedIn = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const logOut = () => {
        setUser(null);
        navigate("/");
    }
    return (
        <>
        <button className="primary-btn" onClick={() => logOut()}>LOGOUT</button>
        <div className="profile-icon"><img src={userProfilePhoto} alt="User Profile Photo" /></div>
        </>
    )
}

export default LoggedIn;