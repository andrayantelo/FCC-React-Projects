export const PRESS_NUMBER = 'PRESS_NUMBER';
export const PRESS_OPERATOR = 'PRESS_OPERATOR';
export const PRESS_DECIMAL = 'PRESS_DECIMAL';
export const CLEAR = 'CLEAR';
export const CALCULATE = 'CALCULATE';

export const pressNumber = (num) => {
    return {
        type: PRESS_NUMBER,
        payload: num
    }
}

export const pressDecimal = () => {
    return {
        type: PRESS_DECIMAL
    }
}

export const clear = () => {
    return {
        type: CLEAR
    }
}

export const pressOperator = (operator) => {
    return {
        type: PRESS_OPERATOR,
        payload: operator
    }
}

export const calculate = (formula) => {
    return {
        type: CALCULATE,
        payload: formula
    }
}


