import React from 'react';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import './index.css';


const leadingZero = (num) => {
    if (num < 10 && num >=0 ) {
        return `0${num}`;
    }
    return `${num}`;
}

const formatTime = (milliseconds) => {
    let seconds = leadingZero(Math.floor((milliseconds/1000)%60));
    let minutes = Math.floor(milliseconds/(1000*60)%60);
    let hours = Math.floor((milliseconds / 3600000) % 60);

    if (hours === 1) {
        return `60:00`;
    }
    return `${minutes}:${seconds}`;
}

const TIMER_STARTED = 'TIMER_STARTED';
const TIMER_PAUSED = 'TIMER_PAUSED';
const TIMER_RESET = 'TIMER_RESET';
const TICKED = 'TICKED';
const SESSION_ENDED = 'SESSION_ENDED';
const BREAK_UPDATED = 'BREAK_UPDATED';
const WORK_UPDATED = 'WORK_UPDATED';

const startTimer = () => {
    return {
        type: TIMER_STARTED,
        payload: Date.now()
    }
}

const tick = () => {
    return {
        type: TICKED,
        payload: Date.now()
    }
}

const pauseTimer = () => {
    return {
        type: TIMER_PAUSED
    }
}

const resetTimer = () => {
    return {
        type: TIMER_RESET
    }
}

const switchSessions = () => {
    return {
        type: SESSION_ENDED
    }
}

const updateWork = (type) => {
    return {
        type: WORK_UPDATED,
        payload: type
    }
}

const updateBreak = (type) => {
    return {
        type: BREAK_UPDATED,
        payload: type
    }
}

const timerReducer = (prevState = {}, action) => {
    switch(action.type) {
        case TIMER_STARTED:
            return {
                ...prevState,
                timerRunning: true,
                startTime: action.payload
            }
        case TICKED:
            return {
                ...prevState,
                displayTime: prevState.displayTime - (1000)
            }
        case TIMER_PAUSED:
            return {
                ...prevState,
                timerRunning: false
            }
        case TIMER_RESET:
            return {
                ...prevState,
                pauseTime: 0,
                startTime: 0,
                displayTime: prevState["workLength"],
                timerRunning: false,
                currentSession: "workLength"
            }
        case SESSION_ENDED:
            let newSession = prevState.currentSession === "workLength"? "breakLength": "workLength";
            return {
                ...prevState,
                currentSession: newSession,
                displayTime: prevState[newSession] 

            }
        case WORK_UPDATED:
            if (action.payload === "session-increment") {
                const newWorkLength = prevState.workLength + 60000;
                if (newWorkLength > 3600000) {
                    return prevState
                }
                return {
                    ...prevState,
                    workLength: newWorkLength,
                    displayTime: newWorkLength
                }
            }
            else {
                const newWorkLength = prevState.workLength - 60000;
                if (newWorkLength < 0) {
                    return prevState
                }
                else {
                    return {
                        ...prevState,
                        workLength: newWorkLength,
                        displayTime: newWorkLength
                    }
                }
            }
        case BREAK_UPDATED:
                if (action.payload === "break-increment") {
                    const newBreakLength = prevState.breakLength + 60000;
                    if (newBreakLength > 3600000) {
                        return prevState
                    }
                    return {
                        ...prevState,
                        breakLength: newBreakLength
                    }
                }
                else {
                    const newBreakLength = prevState.breakLength - 60000;
                    if (newBreakLength < 0) {
                        return prevState
                    }
                    else {
                        return {
                            ...prevState,
                            breakLength: newBreakLength
                        }
                    }
                }
        default:
            return prevState;
    }
}

// SET UP STORE

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.info('Dispatching', action);
    let result = next(action);
    console.log("Next state ", store.getState());
    console.groupEnd();
    return result;
};


const preloadedState = {
    timer: {
        breakLength: 5*60*1000,
        workLength: 25*60*1000,
        startTime: 0,
        timerRunning: false,
        displayTime: 25*60*1000,
        currentSession: "workLength"
    }
}

const rootReducer = combineReducers({
  timer: timerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// second argument is initial state
const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(logger)));


// CONTROLS COMPONENT
const Controls = (props) => {
    const myAudio = useRef();

    const { timerRunning,
            displayTime } = props.timer;
    const { startTimer,
            pauseTimer,
            resetTimer,
            tick,
            switchSessions } = props;

    const handleClick = (event) => {
        const actionType = event.target.id;
        if (actionType === "start_stop") {
            if (timerRunning) {
                pauseTimer();
            }
            else {
                startTimer();
            }
        }
        else if (actionType === "pause") {
            pauseTimer();
        }
        else if (actionType === "reset") {
            resetTimer();
        }
    }

    const playBeep = () => {
        if (myAudio.current !== null) {
            myAudio.current.play()
          }
    }

    useEffect(() => {
        let timer;
        if (timerRunning && displayTime >= 0) {
            timer = setInterval(() => {
                tick();
            }, 1000)
        }
        else if (displayTime < 0) {
            playBeep();
            switchSessions();
        }
        return () => clearInterval(timer);
    }, [timerRunning, displayTime, tick, switchSessions]);

    return (
        <div>
            <div className="controls">
                <i
                    id="start_stop"
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
            <div>
                <audio
                    id="beep"
                    type="audio"
                    src="https://goo.gl/65cBl1"
                    ref={myAudio}
                />
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return { timer: state.timer }
}

const WrappedControls = connect(
    mapStateToProps,
    {
        startTimer,
        pauseTimer,
        resetTimer,
        tick,
        switchSessions
    }
)(Controls);

// DISPLAY COMPONENT
const Display = (props) => {
    return(
        <div className="outer-display-container">
            <div className="display-container">
                <h3
                    id="timer-label"
                    className="ui header">
                    {props.timer.currentSession === "workLength"? "Session" : "Break"}
                </h3>
                <div 
                    id="time-left"
                    className="display">
                    {formatTime(props.timer.displayTime)}
                </div>
                <WrappedControls />
            </div>
        </div>
    )
}

const mapDisplayToProps = (state) => {
    return { timer: state.timer }
}


const WrappedDisplay = connect(
    mapDisplayToProps
)(Display);

// SESSION COMPONENT

const Session = (props) => {

    const handleClick = (event) => {
        if (props.timerRunning) {
            return;
        }
        else if (props.title === "Break") {
            props.updateBreak(event.target.id);
        }
        else {
            props.updateWork(event.target.id);
        }
    }

    return (
        <div className="session">
            <h4 id={`${props.title.toLowerCase()}-label`} className="ui large header">{ props.title } Length</h4>
            <div className="session-display-container">
                <i
                    id={`${props.title.toLowerCase()}-increment`}
                    className="session-item big arrow alternate circle up outline icon"
                    onClick={handleClick}
                ></i>
                <div 
                    id={`${props.title.toLowerCase()}-length`}
                    className="session-item session-display">
                    {formatTime(props.sessionLength)}
                </div>
                <i
                    id={`${props.title.toLowerCase()}-decrement`}
                    className="session-item big arrow alternate circle down outline icon"
                    onClick={handleClick}
                ></i>
            </div>
        </div>
    )
}

const mapSessionToProps = (state) => {
    return {
        timerRunning: state.timer.timerRunning
    }
}

const WrappedSession = connect(
    mapSessionToProps,
    {
        updateWork,
        updateBreak
    }
)(Session);


// SESSIONLIST COMPONENT

const SessionList = (props) => {
    return (
        <div className="sessions-container">
            <WrappedSession
                title="Break"
                sessionLength={props.breakLength}
            />
            <WrappedSession
                title="Session"
                sessionLength={props.workLength}
            />
        </div>
    )
}

const mapSessionListToProps = (state) => {
    return {
        workLength : state.timer.workLength,
        breakLength : state.timer.breakLength
    }
}

const WrappedSessionList = connect(
    mapSessionListToProps
)(SessionList);


// APP COMPONENT
const App = () => {
   
    return (
        <div className="container">
            <div className="inner-container ui teal inverted segment">
                <div className="outer-row">
                    <h1 className="ui centered huge header">Pomodoro</h1>
                </div>
                <div className="outer-row">
                    <WrappedSessionList />
                </div>
                <div className="outer-row">
                    <WrappedDisplay />
                </div>
            </div>
        </div>
    )
}

// RENDERING

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
