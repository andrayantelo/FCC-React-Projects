import { UPDATE_OUTPUT, CLEAR } from '../actions';

export default (state="0", action) => {
    switch (action.type) {
        case UPDATE_OUTPUT:
            if (state === "0") {
                return action.payload;
            }

            return state + action.payload;
        case CLEAR:
            return action.payload;
        default:
            return state;
    }
}