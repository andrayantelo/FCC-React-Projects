import {
    START,
    PAUSE,
    RESET,
    TICK,
    UPDATE_WORK,
    UPDATE_BREAK,
    UPDATE_DISPLAY
} from './types';

export const startTimer = () => {
    return {
        type: START,
        payload: Date.now()
    }
}

export const tick = () => {
    return {
        type: TICK,
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

export const updateWork = (work, type) => {
    return {
        type: UPDATE_WORK,
        payload: work
    }
}