import { CLEAR, CALCULATE, PRESS_OPERATOR, PRESS_DECIMAL, PRESS_NUMBER } from '../actions';
import { calculate } from '../helpers/helpers.js';

const operators = ['-', '+', '*', '/'];

// state = {summary: {formula: [], result: ""}}
let initialSummary =  {
    formula: [],
    result: ""
};

export default (summary=initialSummary, action) => {
    const { formula, result } = summary;
    let prev = formula[formula.length - 1];
    
    switch(action.type) {
        case PRESS_NUMBER:
            if (prev === "0") {
                return {
                    ...summary,
                    formula: [...formula.slice(0, -1), action.payload]
                };
            }
            else if (!isNaN(prev)) {
                prev = prev + action.payload;
                return {
                    ...summary,
                    formula: [...formula.slice(0, -1), prev]
                };
            }
            return {
                ...summary,
                formula: [...formula, action.payload]
            };
        case PRESS_DECIMAL:
            if (prev === "" || operators.includes(prev)) {
                return {
                    ...summary,
                    formula: [...formula.slice(0, -1), "0."]
                };
            }
            else if (isNaN(prev)) {
                return {
                    ...summary,
                    formula: [...formula, "0."]
                }
            }
            else if (!Number.isInteger(prev) && !prev.includes(".")) {
                return {
                    ...summary,
                    formula: [...formula.slice(0, -1), prev + "."]
                }
            }
            else if (prev.includes(".")) {
                return summary;
            }
            return {
                ...summary,
                formula: [...formula, "."]
            };
        case PRESS_OPERATOR:
            let penultimate = formula[formula.length - 2] || undefined;
            // if the last element is NOT a minus sign, and
            // the person pressed minus, include the minus sign
            if (prev !== "-" && action.payload === "-") {
                return {
                    ...summary,
                    formula: [...formula, action.payload]
                };
            }
            // if the last element is a minus sign, check if the 
            // element before that is an operator before replacing
            else if (prev === "-" && operators.includes(penultimate)) {
                return {
                    ...summary,
                    formula: [...formula.slice(0, -2), action.payload]
                };
            }
            else if (prev === "-" && !operators.includes(penultimate)) {
                return {
                    ...summary,
                    formula: [...formula, action.payload]
                }
            }
            // if the last element is an operator, replace the operator
            // with the new operator
            else if (operators.includes(prev)) {
                return {
                    ...summary,
                    formula: [...formula.slice(0, -1), action.payload]
                };
            }
            // include the operator in the formula
            return {
                ...summary,
                formula: [...formula, action.payload]
            };
        case CALCULATE:
            const total = calculate(formula);
            return {
                ...summary,
                result: total,
                formula: [total]};
        case CLEAR:
            return initialSummary;
        default:
            return summary;
    }
}