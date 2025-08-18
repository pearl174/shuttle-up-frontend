import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import API_BASE from "../../../config.js";

const SignUp = () => {
    const navigate = useNavigate();
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
                <input type="text" name="username" id="username" required placeholder="johndoe" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required placeholder="johndoe@gmail.com" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required minLength="6" maxLength="20" />
                <button type="submit" className="primary-btn register-btn" onClick={(e) => handleRegister(e)}>Register</button>
            </form>
        </div>
    )
}

export default SignUp;