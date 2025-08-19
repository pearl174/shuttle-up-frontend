import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [serverMsg, setServerMsg] = useState("");
    const [isError, setIsError] = useState(false);

    return (
        <div className="flex-container-signup">
            <form className="signup-form" method="POST">
                <label htmlFor="username">Username</label>
                {errors && <div className="username-error invalid">{errors.username}</div>}
                <input 
                    type="text" 
                    id="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                    placeholder="johndoe" />
                
                <label htmlFor="password">Password</label>
                {errors && <div className="password-error invalid">{errors.password}</div>}
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    minLength="6" 
                    maxLength="20" />
                {serverMsg && <div className={`server-msg ${isError? "invalid": "valid"}`}>{serverMsg}</div>}
                <button type="submit" className="primary-btn register-btn">Register</button>
            </form>
        </div>
    )
}

export default Login;