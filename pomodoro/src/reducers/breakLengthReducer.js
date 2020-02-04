import { UPDATE_BREAK } from '../actions/types';

export default (length=5*60000, action) => {
    switch(action.type) {
        case UPDATE_BREAK:
            if (action.payload.change === "up") {
                return action.payload.length + 60000;
            }
            else if (action.payload.change === "down" && length !== 60000) {
                return action.payload.length - 60000;
            }
            else {
                return action.payload.length;
            }
        default:
            return length;
    }
}