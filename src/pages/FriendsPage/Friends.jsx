import { useState } from "react";
import "./Friends.css";
import FriendList from "./FriendList";
import FriendRequests from "./FriendRequests";

export default function Friends() {
    const [mode, setMode] = useState("friends");
    return (
        <div className="friends-container">
            <div className="buttons-friends">
                <button type="button" onClick={() => setMode("friends")} className={mode === "friends"? "active friends primary-btn":"friends primary-btn"}>
                    Friends
                </button>
                <button type="button" onClick={()=> setMode("view-friends")} className={mode === "view-friends"? "active view-friends primary-btn": "view-friends primary-btn"}>
                    View Friends
                </button>
            </div>
            {mode === "friends"? <FriendList />:<FriendRequests />}
        </div>
    )
}