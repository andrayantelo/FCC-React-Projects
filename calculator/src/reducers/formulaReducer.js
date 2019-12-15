import { CLEAR, CALCULATE, PRESS_OPERATOR, PRESS_DECIMAL, PRESS_NUMBER } from '../actions';
import { calculate } from '../helpers/helpers.js';


export default (formula="0", action) => {
    switch (action.type) {
        case PRESS_NUMBER:
            if (formula === "0") {
                return action.payload;
            }
            return formula + action.payload;
        case PRESS_DECIMAL:
            if (formula === "") {
                return "0.";
            }
            else if (formula[-1])
            return formula + ".";
        case CLEAR:
            return "";
        case PRESS_OPERATOR:
            return formula + action.payload;
        case CALCULATE:
            calculate(formula);
            return formula;
        default:
            return formula;
    }
}