import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFriends } from "../../api/friends.js";

export default function Singles({friends}) {
    const navigate = useNavigate();
    const [player1, setPlayer1] = useState(localStorage.getItem("username"));
    const [player2, setPlayer2] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const handleSelect = (friend) => {
        setPlayer2(friend);
        setShowSuggestions(false);
    }
    const suggestions = player2.trim() === ""? [] : friends.filter(friend => friend.user.username.toLowerCase().includes(player2.toLowerCase()));
    
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
                            <li key={friend.user.username} onClick={() => handleSelect(friend.user.username)}>{friend.user.username}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}