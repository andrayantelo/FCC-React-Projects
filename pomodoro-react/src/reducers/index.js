import timerReducer from './timerReducer';
import { combineReducers } from 'redux';


const reducers = combineReducers({
    timer: timerReducer
})

export default reducers;