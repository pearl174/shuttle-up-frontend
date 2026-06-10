import "./FlipClock.css";

export default function FlipClock() {
    return (
        <div className="flipclock-container">
            <div className="minutes-card">
                <div className="card-upper">
                    <div className="number-upper">11</div>
                </div>
                <div className="card-lower">
                    <div className="number-lower">11</div>
                </div>
            </div>
            <div className="seconds-card">
                <div className="card-upper">
                    <div className="number-upper">00</div>
                </div>
                <div className="card-lower">
                    <div className="number-lower">00</div>
                </div>
            </div>
        </div>
    )
}