import { UPDATE_INPUT, CLEAR } from '../actions';

export default (state="0", action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return action.payload;
        case CLEAR:
            return action.payload;
        default:
            return state;
    }
}