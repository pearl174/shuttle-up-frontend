import { useEffect, useState } from "react";

export default function Singles() {
    const [player1, setPlayer1] = useState(localStorage.getItem("username"));
    const [player2, setPlayer2] = useState("");
    const [friends, setFriends] = useState(['john', 'amy', 'hardin']);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const handleSelect = (friend) => {
        setPlayer2(friend);
        setShowSuggestions(false);
    }
    const suggestions = player2.trim() === ""? [] : friends.filter(f => f.toLowerCase().includes(player2.toLowerCase()));
    // useEffect(() => {
    //     const fetchFriends = async() => {
    //         const res = await fetch(`${API_BASE}api/friends/${player1}`, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${token}`
    //             }
    //         });
    //         const data = res.json();
    //         const friends = data.friends;
    //         if (res.status === 400) {
    //             console.log("something went wrong huhu");
    //             return 
    //         }
    //     }
    //     fetchFriends().catch((err) => {
    //         console.error(err);
    //     });
    // }, []);
    
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