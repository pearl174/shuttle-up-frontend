import "./PlayForm.css";
import { useState } from "react";
import Singles from "./Singles";
import Doubles from "./Doubles";

export default function PlayForm() {
    const [mode, setMode] = useState("singles");
    const handleSubmit = (e) => {
        e.preventDefault();
    }
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
            {mode === "singles"? <Singles />:<Doubles />}
            <button type="submit" className="start-match-button primary-btn">Start Match</button>
        </form>
    )
}