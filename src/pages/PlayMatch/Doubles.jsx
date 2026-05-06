import { useState } from "react";
import { useEffect } from "react";
import { getFriends } from "../../api/friends";

export default function Doubles({friends}) {
    const [player1, setPlayer1] = useState(localStorage.getItem("username"));

    const renderInput = (playerName) => {
        const [showSuggestions, setShowSuggestions] = useState(false);
        const [player, setPlayer] = useState("");

        const suggestions = player.trim() === ""? [] : friends.filter(f => f.user.username.toLowerCase().includes(player.toLowerCase()));
        const handleSelect = (friend) => {
            setPlayer(friend);
            setShowSuggestions(false);
        }
        return (
            <div className="suggestions-wrapper">
                <input 
                    autoComplete="off"
                    type="text" 
                    id={playerName}
                    value={player}
                    onChange={(e) => setPlayer(e.target.value)}
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
        )
    }
    return (
        <>
            <h3 className="team-1 team-label">Team 1</h3>
            <label htmlFor="player-1">Player 1</label>
            <input 
                type="text"
                id="player-1"
                value={player1}
                disabled
            />
            <label htmlFor="player-2">Player 2</label>
            {renderInput("player-2")}
            
            <h3 className="team-2 team-label">Team 2</h3>
            <label htmlFor="player-3">Player 3</label>
            {renderInput("player-3")}
            <label htmlFor="player-4">Player 4</label>
            {renderInput("player-4")}
        </>
    )
}