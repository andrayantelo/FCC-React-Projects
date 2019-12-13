import { combineReducers } from 'redux';
import displayReducer from './displayReducer';

/* 
state = {
    display: "0",
    total: 0
}
*/


export default combineReducers({
    display : displayReducer
})