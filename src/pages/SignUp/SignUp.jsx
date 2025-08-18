import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import API_BASE from "../../../config.js";
import { useState } from "react";

const SignUp = () => {
    // controlled state for react way of doing things
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState(""):
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const username = document
        const res = await fetch(`${API_BASE}api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        })
    }

    
    return (
        <div className="flex-container-signup">
            <form className="signup-form" action="/" method="POST">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                    placeholder="johndoe" />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    placeholder="johndoe@gmail.com" />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    minLength="6" 
                    maxLength="20" />
                <button type="submit" className="primary-btn register-btn" onClick={(e) => handleRegister(e)}>Register</button>
            </form>
        </div>
    )
}

export default SignUp;