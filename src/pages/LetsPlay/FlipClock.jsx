import "./FlipClock.css";
import { useEffect, useState } from "react";

export default function FlipClock() {
    const [flip, setFlip] = useState(false);
    const [bottomFlip, setBottomFlip] = useState(false);
    const [secondsTop, setSecondsTop] = useState(0);
    const [secondsBottom, setSecondsBottom] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [startCounting, setStartCounting] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlip(true);
            setBottomFlip(true);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    // }, [startCounting]);

    const onFlipEnd = () => {
        setSecondsTop((s) => {
            if (s === 60) {
                return 0;
            } else return s + 1;
        });     
        setFlip(false);
    }

    const onBottomFlipEnd = () => {
        setBottomFlip(false);
        setSecondsBottom(secondsTop);
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
                    <div className={`number-upper ${flip? "": "invisible"}`}>{secondsTop + 1}</div>
                    <div className={`number-upper ${flip? "flip": ""}`}
                        onTransitionEnd={onFlipEnd}>{secondsTop}</div>
                </div>
                <div className="card-lower">
                    <div className={`number-lower flipper ${bottomFlip? "bottomFlip": ""}`}
                    onTransitionEnd={onBottomFlipEnd}>{secondsBottom + 1}</div>
                    <div className={`number-lower`}>{secondsBottom}</div>
                </div>
            </div>
        </div>
    )
}