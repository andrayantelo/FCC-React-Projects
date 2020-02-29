import {
    TIMER_STARTED,
    TIMER_PAUSED,
    TIMER_RESET,
    TICKED,
    SESSION_ENDED,
    BREAK_UPDATED,
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

export const switchSessions = () => {
    return {
        type: SESSION_ENDED
    }
}

export const updateWork = (type) => {
    return {
        type: WORK_UPDATED,
        payload: type
    }
}

export const updateBreak = (type) => {
    return {
        type: BREAK_UPDATED,
        payload: type
    }
}
