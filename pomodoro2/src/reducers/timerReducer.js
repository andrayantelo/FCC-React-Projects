import {
    START,
    PAUSE,
    RESET,
    TICK,
    CHANGE_SESSION,
    UPDATE_DISPLAY
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
        case START:
            return {
                ...prevState,
                timerRunning: true,
                startTime: action.payload
            }
        case TICK:
            return {
                ...prevState,
                displayTime: prevState.workLength - (action.payload - prevState.startTime)
            }
        case PAUSE:
            return {
                ...prevState,
                timerRunning: false,
                pauseTime: action.payload
            }
        case RESET:
            return {
                ...prevState,
                pauseTime: 0,
                startTime: 0
            }
        case CHANGE_SESSION:
        case UPDATE_DISPLAY:
        default:
            return prevState;
    }
}