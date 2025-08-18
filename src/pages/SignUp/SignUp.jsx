import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import API_BASE from "../../../config.js";
import { useEffect, useState } from "react";

const SignUp = () => {
    // controlled state for react way of doing things
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [serverMsg, setServerMsg] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (serverMsg) {
            const timer = setTimeout(() => {
                setServerMsg("");
                setIsError(false);
            }, isError? 3000 : 2000);
            return () => clearTimeout(timer);
        }
    }, [serverMsg, isError])

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${API_BASE}api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });
            const data = await res.json();
            setServerMsg(data.msg);
            if (res.status === 400) {
                console.log(data);
                setIsError(true);
            }
            else if (res.status === 500) {
                console.log(data);
                setIsError(true);
            } else {
                setIsError(false);
                console.log(data);
                // insert alerts for all of them
                setTimeout(() => navigate("/"), 1000);
            }
        } catch(err) {
            console.error(err);
        }
    }

    
    return (
        <div className="flex-container-signup">
            <form className="signup-form" method="POST">
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
                {serverMsg && <div className={`serverMsg ${isError? "invalid": "valid"}`}>{serverMsg}</div>}
                <button type="submit" className="primary-btn register-btn" onClick={handleRegister}>Register</button>
            </form>
        </div>
    )
}

export default SignUp;