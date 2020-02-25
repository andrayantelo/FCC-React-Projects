import {
    START,
    PAUSE,
    RESET,
    CHANGE_SESSION,
    UPDATE_DISPLAY
} from '../actions/types';

/*
const preloadedState = {
        breakLength: 3*1000,
        workLength: 120*1000,
        startTime: 0,
        pauseTime: 0,
        timerRunning: false
}
*/

export default (state = {}, action) => {
    switch(action.type) {
        case START:
            return {
                ...state,
                timerRunning: true,
                startTime: action.payload
            }
        case PAUSE:
            return {
                ...state,
                timerRunning: false,
                pauseTime: action.payload
            }
        case RESET:
            return {
                ...state,
                pauseTime: 0,
                startTime: 0
            }
        case CHANGE_SESSION:
        case UPDATE_DISPLAY:
        default:
            return state;
    }
}