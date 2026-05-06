import "./PlayForm.css";
import { useState } from "react";
import Singles from "./Singles";
import Doubles from "./Doubles";
import { useEffect } from "react";
import { getFriends } from "../../api/friends";

export default function PlayForm() {
    const [mode, setMode] = useState("singles");
    const [friends, setFriends] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        const fetchFriends = async() => {
            const player1 = localStorage.getItem("username");
            const {res, data} = await getFriends(player1);
            if (res.status === 401) {
                alert("Something went wrong. Please login again.");
                localStorage.removeItem("token");
                navigate("/login");
            } else if (res.status === 500) {
                alert("Something went wrong");
                navigate(`/profile/${player1}`);
            } else if (res.status === 200) {
                if (data.friends.length === 0) {
                    alert(":(. You have no friends. Go make some!");
                    navigate(`/friends/${player1}`);
                }
                setFriends(data.friends);
                console.log("Here are your friends :D.");
            } else {
                console.log("lol idk what's happening");
                navigate(`/profile/${player1}`);
            }
        }
        fetchFriends().catch((err) => {
            console.error(err);
        });
    }, []);
    return (
        <form onSubmit={handleSubmit} className="flex-container-playform">
            <div className="buttons-playmatch">
                <button type="button" onClick={() => setMode("singles")} className={mode === "singles"? "active singles primary-btn":"singles primary-btn"}>
                    Singles
                </button>
                <button type="button" onClick={()=> setMode("doubles")} className={mode === "doubles"? "active doubles primary-btn": "doubles primary-btn"}>
                    Doubles
                </button>
            </div>
            {mode === "singles"? <Singles friends={friends} />:<Doubles friends={friends}/>}
            <button type="submit" className="start-match-button primary-btn">Start Match</button>
        </form>
    )
}