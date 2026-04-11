import { useEffect, useState } from "react";
import "./Login.css";
import { API_BASE } from "../../../config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Login = () => {
    const {setUser} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [serverMsg, setServerMsg] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (serverMsg) {
            const timeout = setTimeout(() => {
                setServerMsg("");
            }, isError ? 3000 : 2000);
            return () => clearTimeout(timeout);
        }
    }, [serverMsg, isError]);

    useEffect(() => {
        if (errors) {
            const timeout = setTimeout(() => {
                setErrors({});
            }, 5000);
            return () => clearTimeout(timeout); 
        }
    }, [errors]);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch(`${API_BASE}api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            setServerMsg(data.msg);
            // console.log(data);
            if (res.status === 400) {
                if (data.errors) {
                    const newErrors = {};
                    data.errors.forEach(err => {
                        newErrors[err.path] = err.msg;
                    })
                    setErrors(newErrors);
                } else {
                    console.log(data);
                    setIsError(true);
                }
            } else {
                setIsError(false);
                localStorage.setItem("token", data.token);
                localStorage.setItem("username", username);
                setUser(username);
                navigate(`/profile/${username}`);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex-container-signup">
            <form className="signup-form" method="POST" onSubmit={handleLogin}>
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
                <button type="submit" className="primary-btn register-btn">Login</button>
            </form>
        </div>
    )
}

export default Login;