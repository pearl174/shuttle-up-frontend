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
            setSeconds((s) => {
                if (s === 60) {
                    return 0;
                } else return s + 1;
            }); 
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    // }, [startCounting]);

    const onFlipStart = () => {
            
    }
    const onFlipEnd = () => {
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
                <div className={`card-upper`}><div className={`number-upper`}>{seconds + 1}</div></div>
                <div className={`card-upper ${flip? "flip" : ""} non-static`}><div className={`number-upper`}>{seconds}</div></div>
                <div className="card-lower"><div className={`number-lower`}>{seconds}</div></div>
                <div onAnimationEnd={onFlipEnd} className={`card-lower ${flip? "flip" : ""}`}><div className={`number-lower`}>{seconds + 1}</div></div>
            </div>
        </div>
    )
}