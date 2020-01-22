import { START, PAUSE, RESET } from '../actions/types';

/* const preloadedState = {
    breakLength: 5,
    sessionLength: 25,
    session: true,
    timer: {
        startTime: 0,
        stopTime: 0,
        elapsed: 0
    }
}
*/

export default (state={}, action) => {
    switch(action.type) {
        case START:
            return { ...state, startTime: action.payload };
        case PAUSE:
            return { 
                ...state,
                stopTime: action.payload,
                elapsed: action.payload - state.startTime
            };
        case RESET:
            return { 
                ...state,
                startTime: 0,
                stopTime: 0,
                elapsed: 0
            }
        default:
            return state;
    }
    
}