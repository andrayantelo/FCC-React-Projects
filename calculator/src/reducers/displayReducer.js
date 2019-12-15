import { PRESS_NUMBER, PRESS_DECIMAL, CLEAR, PRESS_OPERATOR } from '../actions';

let initialState = {
    display: "0",
    formula: "0"
}

// {display: "0", formula: "0"}
export default (state=initialState, action) => {
    switch (action.type) {
        case PRESS_NUMBER:
            if (state.display === "0") {
                return {
                    ...state,
                    display: action.payload
                }
            }
            return {
                ...state,
                display: state.display + action.payload
            };
        case PRESS_DECIMAL:
            // if the number displayed does not have a decimal, then 
            // we can include the decimal
            // if the number displayed does have a decimal, then 
            // do not include the decimal
            if (state.display.includes('.')) {
                return state;
            }
            return {
                ...state,
                display: state.display + "."
            };
        case CLEAR:
            return {
                ...state,
                display: "0",
                formula: "0"
            };
        case PRESS_OPERATOR:
            return {
                ...state,
                display: action.payload,
                formula: state.formula + action.payload
            };
        // if person clicked on an operator, we want to display
        // just the operator
        default:
            return state;
    }
}