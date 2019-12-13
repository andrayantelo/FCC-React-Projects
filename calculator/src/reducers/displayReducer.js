import { UPDATE_DISPLAY, CLEAR, CALCULATE } from '../actions';
import { calculate } from '../helpers/helpers.js';


export default (display="0", action) => {
    switch (action.type) {
        case UPDATE_DISPLAY:
            if (display === "0" && action.payload !== '.') {
                return action.payload;
            }
            return display + action.payload;
        case CLEAR:
            return action.payload;
        case CALCULATE:
            calculate(display + action.payload);
            return display + action.payload;
        default:
            return display;
    }
}