import { combineReducers } from 'redux';
import timerReducer from './timerReducer';


const reducers = combineReducers({
    timer: timerReducer
})

export default reducers;