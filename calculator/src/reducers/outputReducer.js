import { UPDATE_OUTPUT, CLEAR, MAKE_DECIMAL } from '../actions';

export default (state="0", action) => {
    switch (action.type) {
        case UPDATE_OUTPUT:
            if (state === "0") {
                return action.payload;
            }
            return state + action.payload;
        case CLEAR:
            return action.payload;
        case MAKE_DECIMAL:
            return state + action.payload;
        default:
            return state;
    }
}