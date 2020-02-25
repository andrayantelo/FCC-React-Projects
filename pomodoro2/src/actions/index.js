import {
    START,
    PAUSE,
    RESET,
    CHANGE_SESSION,
    UPDATE_DISPLAY
} from './types';

export const startTimer = () => {
    return {
        type: START,
        payload: Date.now()
    }
}

export const pauseTimer = () => {
    return {
        type: PAUSE,
        payload: Date.now()
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