import { UPDATE_BREAK } from '../actions/types';

export default (length=5, action) => {
    switch(action.type) {
        case UPDATE_BREAK:
            if (action.payload.change === "up") {
                return length + 1;
            }
            else if (action.payload.change === "down" && length !== 1) {
                return length - 1;
            }
            else {
                return length;
            }
        default:
            return length;
    }
}