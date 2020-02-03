import {
        UPDATE_BREAK,
        UPDATE_WORK,
        UPDATE_SESSION,
        START,
        PAUSE,
        RESET,
        UPDATE_DISPLAY
     } from './types';

export const updateBreak = (num, change) => {
    return {
        type: UPDATE_BREAK,
        payload : {
            num,
            change
        }
    }
}

export const updateWork = (num, change) => {
    return {
        type: UPDATE_WORK,
        payload : {
            num,
            change
        }
    }
}

export const updateSession = () => {
    return {
        type: UPDATE_SESSION
    }
}

export const start = (startTime) => {
    return {
        type: START,
        payload: startTime
    }
}

export const pause = (stopTime) => {
    return {
        type: PAUSE,
        payload: stopTime
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const updateDisplay = () => {
    return {
        type: UPDATE_DISPLAY
    }
}