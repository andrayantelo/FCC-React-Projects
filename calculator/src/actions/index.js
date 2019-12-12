export const UPDATE_INPUT = 'UPDATE_INPUT';
export const UPDATE_OUTPUT = 'UPDATE_OUTPUT';
export const CLEAR = 'CLEAR';
export const MAKE_DECIMAL = 'MAKE_DECIMAL';

export const updateInput = (input) => {
    return {
        type: UPDATE_INPUT,
        payload: input
    }
}

export const updateOutput = (output) => {
    return {
        type: UPDATE_OUTPUT,
        payload: output
    }
}

export const clear = () => {
    return {
        type: CLEAR,
        payload: "0"
    }
}

export const makeDecimal = (value) => {
    return {
        type: MAKE_DECIMAL,
        payload: value
    }
}
