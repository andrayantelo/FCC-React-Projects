import React, { useState, useEffect } from 'react';


const Timer = () => {
    const [ running, setRunning ] = useState(false);
    

    const [ timer, setTimer ] = useState({
        initial: 25*60000,
        remaining: 25*60000,
        elapsed: 0,
        startTime: 0,
        stopTime: 0
    })

   // const [ display, setDisplay ] = useState(timer.remaining);

    const toggleTimer = () => {
        setRunning(!running);
        setTimer({ ...timer, startTime: Date.now() })
    }


    useEffect(() => {
        console.log("test")
        let interval = null;
        if (running) {
            interval = setInterval(() => {
                let elapsed = (Date.now() - timer.startTime);
                let remaining = timer.initial - elapsed;
                setTimer(timer => {
                            
                    return {...timer, elapsed, remaining}
                })
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [running, timer])

    useEffect(() => {
        console.log(timer);
    }, [timer])

    return (
        <div>
            {timer.remaining}
            <button
                onClick={toggleTimer}
            >
                On/Off
            </button>
        </div>
    )
}

export default Timer;