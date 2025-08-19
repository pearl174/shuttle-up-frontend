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
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (serverMsg) {
            const timer = setTimeout(() => {
                setServerMsg("");
                setIsError(false);
            }, isError? 3000 : 2000);
            return () => clearTimeout(timer);
        }
    }, [serverMsg, isError]);

    useEffect(() => {
        if (errors) {
            const timer = setTimeout(() => {
                setErrors({});
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

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
                if (data.errors) {
                    const newErrors = {};
                    data.errors.forEach(err => {
                        newErrors[err.path] = err.msg;
                    });
                    setErrors(newErrors);
                } else {
                    console.log(data);
                    setIsError(true);
                }
            }
            else if (res.status === 500) {
                console.log(data);
                setIsError(true);
            } else {
                setIsError(false);
                console.log(data);
                // insert alerts for all of them
                setTimeout(() => navigate("/login"), 1000);
            }
        } catch(err) {
            console.error(err);
        }
    }

    
    return (
        <div className="flex-container-signup">
            <form className="signup-form" method="POST" onSubmit={handleRegister}>
                <label htmlFor="username">Username</label>
                {errors && <div className="username-error invalid">{errors.username}</div>}
                <input 
                    type="text" 
                    id="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                    placeholder="johndoe" />
                <label htmlFor="email">Email</label>
                {errors && <div className="email-error invalid">{errors.email}</div>}
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    placeholder="johndoe@gmail.com" />
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

export default SignUp;
