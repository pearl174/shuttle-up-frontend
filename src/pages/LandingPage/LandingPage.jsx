import "./LandingPage.css";
import { Typewriter } from "react-simple-typewriter";

const LandingPage = () => {
    return <div className="image-holder">
        <div className="hero-content">
            <h1 className="hero-text">
                <Typewriter
                    words={["Track Every Rally. Master Every Match."]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                />
            </h1>
            <button className="primary-btn">Get Started →</button>
      </div>
    </div>
}

export default LandingPage;