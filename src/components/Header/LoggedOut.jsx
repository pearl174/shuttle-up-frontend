import "./Header.css";
import { useNavigate } from "react-router-dom";

const LoggedOut = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className="primary-btn" onClick={() => navigate("/login")}>LOGIN</button>
            <button className="primary-btn" onClick={() => navigate("/signup")}>SIGNUP</button>
        </>
    )
}

export default LoggedOut;