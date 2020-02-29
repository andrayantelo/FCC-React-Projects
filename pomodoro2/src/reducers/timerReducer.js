import {
    TIMER_STARTED,
    TIMER_PAUSED,
    TIMER_RESET,
    TICKED,
    SESSION_ENDED,
    WORK_UPDATED,
    BREAK_UPDATED
} from '../actions/types';

/*
const preloadedState = {
        breakLength: 3*1000,
        workLength: 5*1000,
        startTime: 0,
        timerRunning: false,
        displayTime: 0,
        currentSession: workLength
}
*/

export default (prevState = {}, action) => {
    switch(action.type) {
        case TIMER_STARTED:
            return {
                ...prevState,
                timerRunning: true,
                startTime: action.payload
            }
        case TICKED:
            return {
                ...prevState,
                displayTime: prevState.displayTime - (1000)
                //displayTime: prevState.displayTime - (action.payload - prevState.startTime)
            }
        case TIMER_PAUSED:
            return {
                ...prevState,
                timerRunning: false
            }
        case TIMER_RESET:
            return {
                ...prevState,
                pauseTime: 0,
                startTime: 0,
                displayTime: prevState["workLength"],
                timerRunning: false
            }
        case SESSION_ENDED:
            let newSession = prevState.currentSession === "workLength"? "breakLength": "workLength";
            return {
                ...prevState,
                currentSession: newSession,
                displayTime: prevState[newSession] 

            }
        case WORK_UPDATED:
            if (action.payload === "work-increment") {
                const newWorkLength = prevState.workLength + 60000;
                if (newWorkLength > 3600000) {
                    return prevState
                }
                return {
                    ...prevState,
                    workLength: newWorkLength,
                    displayTime: newWorkLength
                }
            }
            else {
                const newWorkLength = prevState.workLength - 60000;
                if (newWorkLength < 0) {
                    return prevState
                }
                else {
                    return {
                        ...prevState,
                        workLength: newWorkLength,
                        displayTime: newWorkLength
                    }
                }
            }
        case BREAK_UPDATED:
                if (action.payload === "break-increment") {
                    const newBreakLength = prevState.breakLength + 60000;
                    if (newBreakLength > 3600000) {
                        return prevState
                    }
                    return {
                        ...prevState,
                        breakLength: newBreakLength
                    }
                }
                else {
                    const newBreakLength = prevState.breakLength - 60000;
                    if (newBreakLength < 0) {
                        return prevState
                    }
                    else {
                        return {
                            ...prevState,
                            breakLength: newBreakLength
                        }
                    }
                }
        default:
            return prevState;
    }
}