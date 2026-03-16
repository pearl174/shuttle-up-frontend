import "./Profile.css";
import "./ButtonTray.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const ButtonTray = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const playMatch = () => {
        navigate("/playMatch");
    }
    const viewFriends = () => {
        navigate(`/friends/${user}`);
    }
    const viewPastMatches = () => {
        navigate(`/history/${user}`)
    }
    return (
        <div className="button-tray-container">
            <button className="primary-btn action-button" onClick={() => playMatch()}>Play a Match!</button>
            <button className="primary-btn action-button" onClick={() => viewFriends()}>Friends</button>
            <button className="primary-btn action-button" onClick={() => viewPastMatches()}>View Past Matches</button>
        </div>
    )
}

export default ButtonTray;