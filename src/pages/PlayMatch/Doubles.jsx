import { useState } from "react";

export default function Doubles() {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    return (
        <>
            <label htmlFor="player-1">Player 1</label>
            <input 
                type="text"
                id="player1-name"
                value={player1}
                onChange = {(e) => setPlayer1(e.target.value)}
                required 
            />
            <label htmlFor="player-2">Player 2</label>
            <input 
                type="text" 
                id="player2-name"
                value={player2}
                onChange = {(e) => setPlayer2(e.target.value)}
                required 
            />
        </>
    )
}