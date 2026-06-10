import "./FlipClock.css";

export default function FlipClock() {
    const [flip, setFlip] = useState(false);
    const handleFlip = () => {
        setFlip(true);
        const timer = setTimeout(() => {
            setFlip(false);
        }, 1000);
    }
    return (
        <div className="flipclock-container">
            <div className="minutes-card">
                <div className="card-upper">
                    <div className="number-upper" onClick={handleFlip}>11</div>
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