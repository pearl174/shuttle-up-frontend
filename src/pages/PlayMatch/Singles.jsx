import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFriends } from "../../api/friends.js";

export default function Singles() {
    const navigate = useNavigate();
    const [player1, setPlayer1] = useState(localStorage.getItem("username"));
    const [player2, setPlayer2] = useState("");
    const [friends, setFriends] = useState(['john', 'amy', 'hardin']);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const handleSelect = (friend) => {
        setPlayer2(friend);
        setShowSuggestions(false);
    }
    const suggestions = player2.trim() === ""? [] : friends.filter(f => f.toLowerCase().includes(player2.toLowerCase()));
    useEffect(() => {
        const fetchFriends = async() => {
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
        <>
            <label htmlFor="player-1">Player 1</label>
            <input 
                type="text"
                id="player-1"
                value={player1}
                disabled
                required 
            />
            <label htmlFor="player-2">Player 2</label>
            <div className="suggestions-wrapper">
                <input 
                    autoComplete="off"
                    type="text" 
                    id="player-2"
                    value={player2}
                    onChange = {(e) => setPlayer2(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
                    required 
                />  
                {suggestions.length > 0 && showSuggestions && (
                    <ul className="suggestions">
                        {suggestions.map(friend => (
                            <li key={friend} onClick={() => handleSelect(friend)}>{friend}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}