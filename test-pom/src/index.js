import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
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

export const checkClock = (beep) => {
    return (dispatch, getState) => {
        const state = getState();

        if (state.timer.displayTime === 1000) {
            beep();
        }
        else if (state.timer.displayTime < 0) {
            dispatch({type: SESSION_ENDED})
        }
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
                displayTime: 25*60*1000,
                workLength: 25*60*1000,
                breakLength: 5*60*1000,
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

// second argument is initial state
const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk));


// CONTROLS COMPONENT
class Controls extends Component {
    constructor(props) {
        super(props);
        this.myAudio = React.createRef();
        this.interval = null;
    }

    startStop = () => {
        const { timerRunning } = this.props.timer;
        const { startTimer, pauseTimer} = this.props;
        if (!timerRunning) {
            console.log("start");
            startTimer();
            this.runTimer();
        }
        else {
            console.log("Pause");
            pauseTimer();
            this.stopTimer();
        }
    }

    reset = () => {
        const { resetTimer } = this.props;
        resetTimer();
        this.stopTimer();
    }

    runTimer = () => {
        const { tick, checkClock } = this.props;
 
        this.interval = setInterval(() => {
            tick();
            checkClock(this.playBeep);
        }, 1000)
        

    }

    stopTimer = () => {
        clearInterval(this.interval);
    }

    playBeep = () => {
        if (this.myAudio !== null) {
            this.myAudio.current.play()
          }
    }

    render() {
        console.log(this.props.timer);
        return (
            <div>
                <div className="controls">
                    <div
                        id="start_stop"
                        onClick={this.startStop}
                    >
                        <i className="big play circle outline icon"></i>
                        <i className="big pause circle outline icon"></i>
                    </div>
                    <div
                        id="reset"
                        onClick={this.reset}
                    >
                       <i className="big redo icon"></i>
                    </div>
                </div>
                <div>
                    <audio
                        id="beep"
                        type="audio"
                        src="https://goo.gl/65cBl1"
                        ref={this.myAudio}
                    />
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        timer: state.timer
    }
}

const WrappedControls = connect(
    mapStateToProps,
    { startTimer,
      pauseTimer,
      resetTimer,
      tick,
      checkClock,
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
