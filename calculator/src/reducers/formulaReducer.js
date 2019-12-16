import { CLEAR, CALCULATE, PRESS_OPERATOR, PRESS_DECIMAL, PRESS_NUMBER } from '../actions';
import { calculate } from '../helpers/helpers.js';

const operators = ['-', '+', '*', '/'];

export default (formula=[""], action) => {
    let prev = formula[formula.length - 1];
    switch (action.type) {
        case PRESS_NUMBER:
            if (prev === "0") {
                return [...formula.slice(0, -1), action.payload];
            }
            else if (!isNaN(prev)) {
                prev = prev + action.payload;
                return [...formula.slice(0, -1), prev];
            }
            return [...formula, action.payload];
        case PRESS_DECIMAL:
            if (prev === "" || operators.includes(prev)) {
                return [...formula.slice(0, -1), "0."];
            }
            else if (prev.includes(".")) {
                return formula;
            }
            return [...formula, "."];
        case PRESS_OPERATOR:
            // if the last element is NOT a minus sign, and
            // the person pressed minus, include the minus sign
            if (prev !== "-" && action.payload === "-") {
                return [...formula, action.payload];
            }
            // if the last element is a minus sign, check if the 
            // element before that is an operator before replacing
            if (prev === "-" && operators.includes(formula[formula.length - 2])) {
                return [...formula.slice(0, -2), action.payload]
            }
            // if the last element is an operator, replace the operator
            // with the new operator
            else if (operators.includes(prev)) {
                return [...formula.slice(0, -1), action.payload]
            }
            // include the operator in the formula
            return [...formula, action.payload];
        case CALCULATE:
            const total = calculate(formula);
            return [total];
        case CLEAR:
            return [""];
        default:
            return formula;
    }
}


/*export default (formula="", action) => {
    let prev = formula[formula.length - 1];
    switch (action.type) {
        case PRESS_NUMBER:
            if (prev === "0") {
                return [action.payload];
            }
            return formula + action.payload;
        case PRESS_DECIMAL:
            //if (formula === "") {
            //    return ["0."];
            //}
            //else if (formula[-1])
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
}*/