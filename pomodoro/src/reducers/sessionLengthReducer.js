import { UPDATE_WORK } from '../actions/types';

export default (length=25*60000, action) => {
    switch(action.type) {
        case UPDATE_WORK:
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