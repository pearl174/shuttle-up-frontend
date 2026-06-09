import "./FlipClock.css";

export default function FlipClock() {
    return (
        <div className="flipclock-container">
            <div className="minutes-card">
                <div className="minutes down">11</div>
                <div className="minutes up">11</div>
            </div>
            <div className="seconds-card">
                <div className="seconds down">00</div>
                <div className="seconds up">00</div>
            </div>
        </div>
    )
}