import { UPDATE_WORK } from '../actions/types';

export default (length=25, action) => {
    switch(action.type) {
        case UPDATE_WORK:
            if (action.payload.change === "up") {
                console.log('increment');
                return length + 1;
            }
            else if (action.payload.change === "down" && length !== 1) {
                console.log('decrement');
                return length - 1;
            }
            else {
                console.log('neither');
                return length;
            }
        default:
            return length;
    }
}