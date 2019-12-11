export const UPDATE_INPUT = 'UPDATE_INPUT';
export const UPDATE_OUTPUT = 'UPDATE_OUTPUT';
export const CLEAR = 'CLEAR';

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

export const clear = (value) => {
    return {
        type: CLEAR,
        payload: value
    }
}
