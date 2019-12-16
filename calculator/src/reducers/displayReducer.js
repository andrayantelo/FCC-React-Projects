import { PRESS_NUMBER, PRESS_DECIMAL, CLEAR, PRESS_OPERATOR, CALCULATE } from '../actions';
import { calculate } from '../helpers/helpers.js';

const operators = ['+', '/', '*'];

export default (display="0", action) => {
    switch (action.type) {
        case PRESS_NUMBER:
            if (display === "0") {
                return action.payload;
            }
            else if (operators.includes(display)) {
                return action.payload;
            }
            return display + action.payload;
        case PRESS_DECIMAL:
            // if the number displayed does not have a decimal, then 
            // we can include the decimal
            // if the number displayed does have a decimal, then 
            // do not include the decimal
            if (display.includes('.')) {
                return display;
            }
            return display + ".";
        case CLEAR:
            return "0";
        case PRESS_OPERATOR:
            // if person clicked on an operator, we want to display
            // just the operator
            return action.payload
        case CALCULATE:
            const total = calculate(action.payload);
            return total;
        default:
            return display;
    }
}

/*const initialState = { display: "0", formula: "0"};
export default (state=initialState, action) => {
    switch (action.type) {
        case PRESS_NUMBER:
            if (state.display === "0") {
                return {
                    ...state,
                    display: action.payload,
                    formula: state.formula + action.payload
                }
            }
            return state;
        default:
            return state;
    }
}*/