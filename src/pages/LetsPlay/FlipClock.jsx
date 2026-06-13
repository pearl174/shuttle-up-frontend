import "./FlipClock.css";
import { useEffect, useState } from "react";

export default function FlipClock() {
    const [flip, setFlip] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [startCounting, setStartCounting] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlip(true);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    // }, [startCounting]);

    const onFlipEnd = () => {
        setSeconds(s => s + 1); 
        setFlip(false);
    }
    return (
        <div className="flipclock-container">
            <div className="minutes-card">
                <div className="card-upper">
                    <div className={`number-upper ${flip ? "flip" : ""}`}>11</div>
                </div>
                <div className="card-lower">
                    <div className="number-lower">11</div>
                </div>
            </div>
            <div className="seconds-card">
                <div className="card-upper">
                    <div className={`number-upper ${flip? "": "invisible"}`}>{seconds + 1}</div>
                    <div className={`number-upper ${flip? "flip": ""}`}
                        onTransitionEnd={onFlipEnd}>{seconds}</div>
                </div>
                <div className="card-lower invisible">
                    <div className="number-lower">00</div>
                </div>
            </div>
        </div>
    )
}