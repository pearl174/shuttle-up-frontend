import { useState } from "react";
import "./Friends.css";
import FriendList from "./FriendList";
import FriendRequests from "./FriendRequests";
import AddFriends from "./AddFriends";

export default function Friends() {
    const [mode, setMode] = useState("friends");
    return (
        <div className="friends-container">
            <div className="buttons-friends">
                <button type="button" onClick={() => setMode("friends")} className={mode === "friends"? "active friends primary-btn":"friends primary-btn"}>
                    Friends
                </button>
                <button type="button" onClick={()=> setMode("friend-requests")} className={mode === "friend-requests"? "active friend-requests primary-btn": "friend-requests primary-btn"}>
                    Friend Requests
                </button>
                <button type="button" onClick={() => setMode("add-friends")} className={mode === "add-friends"? "active add-friends primary-btn":"add-friends primary-btn"}>
                    Add Friends
                </button>
            </div>
            <div className="friends-list-container">
                {mode === "friends"? <FriendList />
                :mode ==="friend-requests" ? <FriendRequests setMode={setMode}/>
                :<AddFriends />}
            </div>
        </div>
    )
}