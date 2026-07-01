import "./FlipClock.css";
import { useEffect, useRef, useState } from "react";

export default function FlipClock() {
    const [flip, setFlip] = useState(false);
    const [flipMinute, setFlipMinute] = useState(false);
    const [seconds, setSeconds] = useState(-1);
    const [minutes, setMinutes] = useState(-1);
    const secondsRef = useRef(-1);
    const minutesRef = useRef(-1);
    const [startCounting, setStartCounting] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (secondsRef.current === 58) {
                minutesRef.current = minutesRef.current + 1;
                setMinutes(minutesRef.current);
                setFlipMinute(true);
            }
            setFlip(true);
            const nextSec = secondsRef.current === 59 ? 0 : secondsRef.current + 1;
            secondsRef.current = nextSec;
            setSeconds(nextSec);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    // }, [startCounting]);

    const onFlipEnd = () => {
        setFlip(false);
    }

    const onFlipMinEnd = () => {
        setFlipMinute(false);
    }

    return (
        <div className="flipclock-container">
            <div className="minutes-card">
                <div className={`card-upper`}><div className={`number-upper`}>{minutes + 1 < 10? `0${minutes + 1}` : minutes + 1 === 60? "00" : `${minutes + 1}`}</div></div>
                <div className={`card-upper ${flipMinute? "flip" : ""} non-static`}><div className={`number-upper`}>{minutes < 10? `0${minutes}` : `${minutes}`}</div></div>
                <div className="card-lower"><div className={`number-lower`}>{minutes < 10? `0${minutes}` : `${minutes}`}</div></div>
                <div onAnimationEnd={onFlipMinEnd} className={`card-lower ${flipMinute? "flip" : ""}`}><div className={`number-lower`}>{minutes + 1 < 10? `0${minutes + 1}` : minutes + 1 === 60? "00" : `${minutes + 1}`}</div></div>
            </div>
            <div className="seconds-card">
                <div className={`card-upper`}><div className={`number-upper`}>{seconds + 1 < 10? `0${seconds + 1}` : seconds + 1 === 60? "00" : `${seconds + 1}`}</div></div>
                <div className={`card-upper ${flip? "flip" : ""} non-static`}><div className={`number-upper`}>{seconds < 10? `0${seconds}` : `${seconds}`}</div></div>
                <div className="card-lower"><div className={`number-lower`}>{seconds < 10? `0${seconds}` : `${seconds}`}</div></div>
                <div onAnimationEnd={onFlipEnd} className={`card-lower ${flip? "flip" : ""}`}><div className={`number-lower`}>{seconds + 1 < 10? `0${seconds + 1}` : seconds + 1 === 60? "00" : `${seconds + 1}`}</div></div>
            </div>
        </div>
    )
}