import "./Profile.css";
import "./ButtonTray.css";

const ButtonTray = () => {

    return (
        <div className="button-tray-container">
            <button className="primary-btn action-button">Play a Match!</button>
            <button className="primary-btn action-button">Friends</button>
            <button className="primary-btn action-button">View Past Matches</button>
        </div>
    )
}

export default ButtonTray;