import { combineReducers } from 'redux';
import breakLengthReducer from './breakLengthReducer';
import sessionLengthReducer from './sessionLengthReducer';
import sessionReducer from './sessionReducer';
import timerReducer from './timerReducer';

export default combineReducers({
    breakLength: breakLengthReducer,
    sessionLength: sessionLengthReducer,
    session: sessionReducer,
    timer: timerReducer
})