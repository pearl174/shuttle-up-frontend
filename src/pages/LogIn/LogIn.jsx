import { useEffect, useState } from "react";
import "./Login.css";
import API_BASE from "../../../config";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
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
                body: JSON.stringify({ email, password })
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
                navigate(`/dashboard/${data.username}`);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex-container-signup">
            <form className="signup-form" method="POST" onSubmit={handleLogin}>
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
                <button type="submit" className="primary-btn register-btn">Login</button>
            </form>
        </div>
    )
}

export default Login;