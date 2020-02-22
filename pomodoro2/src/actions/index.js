import {
    START,
    PAUSE,
    RESET,
    CHANGE_SESSION,
    UPDATE_DISPLAY
} from './types';

export const startTimer = (startTime) => {
    return {
        type: START,
        payload: startTime
    }
}

export const pauseTimer = () => {
    return {
        type: PAUSE
    }
}

export const resetTimer = () => {
    return {
        type: RESET
    }
}

export const changeSession = (session) => {
    return {
        type: CHANGE_SESSION,
        payload: session
    }
}

export const updateDisplay = (display) => {
    return {
        type: UPDATE_DISPLAY,
        payload: display
    }
}