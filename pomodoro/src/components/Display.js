import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { start, pause, reset, updateDisplay, updateWork, stop, updateSession } from '../actions';
import { formatTime } from '../helpers';

/* is it running
total time it has been running
total time it has been paused 

startTime
pauseTime

when you unpause, get however long it has been paused,
current time - start time - elapsed = total amount of time it has been paused

update pause time with that

*/


const Display = (props) => {
    const {
        sessionLength,
        breakLength,
        startTime,
        pausetime,
        timerRunning,
        start,
        pause,
        reset,
        updateDisplay,
        display,
        updateWork,
        stop,
        currentSession,
        updateSession
    } = props;

    const handleClick = (event) => {
        const id = event.target.id;

        // get current time left
        if (timerRunning) {
            // if the timer is already running and someone hits start
            // nothing happens, the timer continues

            // if the timer is already running and someone hits pause
            // the timer stops
            if (id === "pause") {
                console.log("pause"); 
                // update timerRunning and pauseTime
                pause(Date.now());
                console.log("attempting to update sessionLength to: ", display);
                updateWork(display);
            }
            
        }
        else {
            // if the timer is not running and someone hits start,
            // the timer starts
            if (id === "start") {
                console.log("start");
                // update timerRunning and startTime
                start(Date.now())
            }
            // if the timer is not running and someone hits pause, nothing happens
            // reset resets the timer ONLY if timer is not running
            else if (id === "reset") {
                console.log("reset");
                // update startTime, pauseTime, display, and maybe some others
                reset(currentSession)
            }
        }
    }

    useEffect(() => {
        let interval = null;
        if (display <= 0) {
            // stop the timer.
            stop();
        }
        if (timerRunning) {
            interval = setInterval(() => {
            
                //update timeRemaining to
                console.log("currentSession: ", currentSession);
                let newDisplay = currentSession - (Date.now() - startTime);
                updateDisplay(newDisplay);
                console.log(formatTime(newDisplay));
            }, 1000);
        }
        return () => clearInterval(interval);
      }, [timerRunning, currentSession, startTime, display, updateDisplay]);

    return (
        <div className="display-container">
            <h3 className="ui header">
                Session
            </h3>
            <div className="display">
                {formatTime(display)}
            </div>
            <div className="controls">
                <i
                    id="start"
                    className="big play circle outline icon"
                    onClick={handleClick}
                ></i>
                <i
                    id="pause"
                    className="big pause circle outline icon"
                    onClick={handleClick}
                ></i>
                <i
                    id="reset"
                    className="big redo icon"
                    onClick={handleClick}
                ></i>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        breakLength: state.breakLength,
        sessionLength: state.sessionLength,
        currentSession: state.currentSession,
        timerRunning: state.timer.timerRunning,
        pauseTime: state.timer.pauseTime,
        startTime: state.timer.startTime,
        display: state.timer.display
    }
}


export default connect(
    mapStateToProps,
    {
        start,
        pause,
        reset,
        updateDisplay,
        updateWork,
        stop,
        updateSession
    }
)(Display);



/*

const Display = (props) => {
    // startTime, elapsed, currentSession, timeRemaining
    //let initialState = {
    //    start: 0,
    //    elapsed: 0,
    //    currentSession: 25*60000,
    //    timeRemaining: 25*60000
    //}

    const { state, setState } = initialState;
    
    const dispatch = useDispatch();

    const { breakLength,
            sessionLength,
            session,
            startTime,
            stopTime,
            timerRunning,
            elapsed,
            timeRemaining
         } = props.state;

    const { start, pause, reset, updateDisplay } = props;

    const currentSession = session? sessionLength: breakLength;
    console.log(timeRemaining);

    const handleClick = (event) => {
        const id = event.target.id;
        // get current time left
        if (timerRunning) {
            // if the timer is already running and someone hits start
            // nothing happens, the timer continues

            // if the timer is already running and someone hits pause
            // the timer stops
            if (id === "pause") {
                console.log("pausing");
                pause(Date.now());
            }
            
        }
        else {
            // if the timer is not running and someone hits start,
            // the timer starts
            if (id === "start") {
                console.log("starting");
                start(Date.now());
            }
            // if the timer is not running and someone hits pause, nothing happens
            // reset resets the timer ONLY if timer is not running
            else if (id === "reset") {
                console.log("resetting");
                reset();
            }
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (timerRunning) {
                //update timeRemaining to
                // currentSession - ((Date.now() - start_time) + elapsed)
                //let updatedElapsed = (Date.now() - startTime) + elapsed;
                //let timeRemaining = currentSession - updatedElapsed;
                dispatch({type: 'UPDATE_DISPLAY'});
            }
        }, 1000);
        return () => clearInterval(interval);
      }, [timerRunning]);

    return (
        <div className="display-container">
            <h3 className="ui header">
                Session
            </h3>
            <div className="display">
                {timerRunning? formatTime(timeRemaining) : formatTime(currentSession) }
            </div>
            <div className="controls">
                <i
                    id="start"
                    className="big play circle outline icon"
                    onClick={handleClick}
                ></i>
                <i
                    id="pause"
                    className="big pause circle outline icon"
                    onClick={handleClick}
                ></i>
                <i
                    id="reset"
                    className="big redo icon"
                    onClick={handleClick}
                ></i>
            </div>
        </div>
    )
}

*/