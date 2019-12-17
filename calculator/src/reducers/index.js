import { combineReducers } from 'redux';
//import displayReducer from './displayReducer';
//import formulaReducer from './formulaReducer';
import summaryReducer from './summaryReducer';

/* 
state = {
    display: "0",
    formula: "0",

}
*/


export default combineReducers({
    summary: summaryReducer
})