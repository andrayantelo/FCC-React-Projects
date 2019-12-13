export const UPDATE_DISPLAY = 'UPDATE_DISPLAY';
export const CLEAR = 'CLEAR';
export const CALCULATE = 'CALCULATE';

export const updateDisplay = (display) => {
    return {
        type: UPDATE_DISPLAY,
        payload: display
    }
}

export const clear = (display) => {
    return {
        type: CLEAR,
        payload: display
    }
}

export const calculate = (num) => {
    return {
        type: CALCULATE,
        payload: num
    }
}


