import {
        UPDATE_BREAK,
        UPDATE_WORK,
        UPDATE_SESSION,
        START,
        PAUSE,
        RESET,
        UPDATE_DISPLAY,
        STOP
     } from './types';

export const updateBreak = (length, change) => {
    return {
        type: UPDATE_BREAK,
        payload : {
            length,
            change
        }
    }
}

export const updateWork = (length, change) => {
    return {
        type: UPDATE_WORK,
        payload : {
            length,
            change
        }
    }
}

export const updateSession = (length) => {
    return {
        type: UPDATE_SESSION,
        payload: length
    }
}

export const start = (startTime) => {
    return {
        type: START,
        payload: startTime
    }
}

export const pause = (pauseTime) => {
    return {
        type: PAUSE,
        payload: pauseTime
    }
}

export const reset = (sessionLength) => {
    return {
        type: RESET,
        payload: sessionLength
    }
}

export const updateDisplay = (display) => {
    return {
        type: UPDATE_DISPLAY,
        payload: display
    }
}

export const stop = () => {
    return {
        type: STOP
    }
}