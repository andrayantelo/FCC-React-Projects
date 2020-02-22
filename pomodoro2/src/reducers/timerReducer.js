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
    timerRunning: false,
    currentSession: "workLength",
    display: 120*1000
}
*/

export default (state = {}, action) => {
    console.log(state);
    switch(action.type) {
        case START:
        case PAUSE:
        case RESET:
        case CHANGE_SESSION:
        case UPDATE_DISPLAY:
        default:
            return state;
    }
}