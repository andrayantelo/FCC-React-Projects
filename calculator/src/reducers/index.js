import { combineReducers } from 'redux';
import displayReducer from './displayReducer';

/* 
state = {
    display: "0",
    formula: "0",

}
*/


export default combineReducers({
    screen : displayReducer
})