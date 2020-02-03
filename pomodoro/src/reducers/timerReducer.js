import {
    START,
    PAUSE,
    RESET,
    UPDATE_BREAK,
    UPDATE_WORK,
    UPDATE_SESSION,
    UPDATE_DISPLAY
}
from '../actions/types';

/* 
const preloadedState = {
    state : {
        breakLength: 5*60000,
        sessionLength: 25*60000,
        session: true,
        startTime: 0,
        stopTime: 0,
    }
}
*/

export default (state={}, action) => {
    switch(action.type) {
        case UPDATE_BREAK:
            if (action.payload.change === "up") {
                return {...state, breakLength: state.breakLength + 1};
            }
            else if (action.payload.change === "down" && state.breakLength !== 1) {
                return {...state, breakLength: state.breakLength - 1};
            }
            else {
                return state;
            }
        case UPDATE_WORK:
            if (action.payload.change === "up") {
                console.log('increment');
                return {...state, sessionLength: state.sessionLength + 1};
            }
            else if (action.payload.change === "down" && state.sessionLength !== 1) {
                console.log('decrement');
                return {...state, sessionLength: state.sessionLength - 1};
            }
            else {
                console.log('neither');
                return state;
            }
        case UPDATE_SESSION:
            return {...state, session: !state.session};
        case START:
            return {
                ...state,
                startTime: action.payload,
                timerRunning: true
            };
        case PAUSE:
            return { 
                ...state,
                stopTime: action.payload,
                timerRunning: false
            };
        case RESET:
            return { 
                ...state,
                startTime: 0,
                stopTime: 0
            }
        case UPDATE_DISPLAY:
            console.log('updating display');
            const currentSession = state.session? state.sessionLength: state.breakLength;
            let updatedElapsed = (Date.now() - state.startTime) + state.elapsed;
            return {
                ...state,
                timeRemaining: currentSession - updatedElapsed,
                elapsed: (Date.now() - state.startTime) + state.elapsed
            }
        default:
            return state;
    }
    
}