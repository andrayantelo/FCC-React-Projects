import {
    TIMER_STARTED,
    TIMER_PAUSED,
    TIMER_RESET,
    TICKED,
    WORK_UPDATED
} from './types';

export const startTimer = () => {
    return {
        type: TIMER_STARTED,
        payload: Date.now()
    }
}

export const tick = () => {
    return {
        type: TICKED,
        payload: Date.now()
    }
}

export const pauseTimer = () => {
    return {
        type: TIMER_PAUSED,
        payload: Date.now()
    }
}

export const resetTimer = () => {
    return {
        type: TIMER_RESET
    }
}

export const updateWork = (work, type) => {
    return {
        type: WORK_UPDATED,
        payload: work
    }
}