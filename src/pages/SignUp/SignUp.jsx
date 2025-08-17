import "./SignUp.css";
const SignUp = () => {
    return (
        <form className="signup-form" action="/" method="POST">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit" className="primary-btn">Register</button>
        </form>
    )
}

export default SignUp;