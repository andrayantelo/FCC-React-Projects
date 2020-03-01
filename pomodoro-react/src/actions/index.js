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
        type: TIMER_STARTED
    }
}

export const tick = () => {
    return {
        type: TICKED
    }
}

export const checkClock = (beep) => {
    return (dispatch, getState) => {
        const state = getState();

        if (state.timer.displayTime === 0) {
            beep();
        }
        else if (state.timer.displayTime < 0) {
            dispatch({type: SESSION_ENDED})
        }
    }
}


export const pauseTimer = () => {
    return {
        type: TIMER_PAUSED
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