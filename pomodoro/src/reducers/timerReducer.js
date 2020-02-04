import {
    START,
    PAUSE,
    RESET,
    UPDATE_DISPLAY,
    STOP
}
from '../actions/types';
import sessionLengthReducer from './sessionLengthReducer';

/* 
const preloadedState = {
    breakLength: 5*60000,
    sessionLength: 25*60000,
    timer: {
        startTime: 0,
        pauseTime: 0,
        timerRunning: false
    }
}
*/

const initialState = {
    startTime: 0,
    pauseTime: 0,
    timerRunning: false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case START:
            return {
                ...state,
                startTime: action.payload,
                timerRunning: true
            };
        case PAUSE:
            return { 
                ...state,
                pauseTime: action.payload,
                timerRunning: false
            };
        case RESET:
            return { 
                ...state,
                startTime: 0,
                pauseTime: 0,
                display: action.payload
            }
        case UPDATE_DISPLAY:
            return {
                ...state,
                display: action.payload
            }
        case STOP:
            return {
                ...state,
                timerRunning: false,
                display: 0
            }
        default:
            return state;
    }  
}