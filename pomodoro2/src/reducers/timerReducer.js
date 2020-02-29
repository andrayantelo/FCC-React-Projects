import {
    TIMER_STARTED,
    TIMER_PAUSED,
    TIMER_RESET,
    TICKED,
    SESSION_CHANGED
} from '../actions/types';

/*
const preloadedState = {
        breakLength: 3*1000,
        workLength: 5*1000,
        startTime: 0,
        pauseTime: 0,
        timerRunning: false,
        displayTime: 0
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
            }
        case TIMER_PAUSED:
            return {
                ...prevState,
                timerRunning: false,
                pauseTime: action.payload
            }
        case TIMER_RESET:
            return {
                ...prevState,
                pauseTime: 0,
                startTime: 0
            }
        case SESSION_CHANGED:
        default:
            return prevState;
    }
}