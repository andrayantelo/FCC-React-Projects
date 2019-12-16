import { combineReducers } from 'redux';
import displayReducer from './displayReducer';
import formulaReducer from './formulaReducer';

/* 
state = {
    display: "0",
    formula: "0",

}
*/


export default combineReducers({
    display : displayReducer,
    formula : formulaReducer
})