import {
    TIMER_STARTED,
    TIMER_PAUSED,
    TIMER_RESET,
    TICKED,
    SESSION_ENDED
} from '../actions/types';

/*
const preloadedState = {
        breakLength: 3*1000,
        workLength: 5*1000,
        startTime: 0,
        timerRunning: false,
        displayTime: 0,
        currentSession: 5*1000
}
*/

export default (prevState = {}, action) => {
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
                //displayTime: prevState.displayTime - (action.payload - prevState.startTime)
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
                displayTime: prevState.currentSession,
                timerRunning: false
            }
        case SESSION_ENDED:
            let newSession = prevState.currentSession === "workLength"? "breakLength": "workLength";
            return {
                ...prevState,
                currentSession: newSession,
                displayTime: prevState[newSession] 

            }
        default:
            return prevState;
    }
}