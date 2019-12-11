import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import outputReducer from './outputReducer';

export default combineReducers({
    input: inputReducer,
    output: outputReducer
})