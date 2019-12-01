import { combineReducers } from 'redux';
import { RANDOM_QUOTE } from '../actions';


const randomQuoteReducer = (quote = '', action) => {
    if (action.type === RANDOM_QUOTE) {
        return action.payload;
    }
    return quote;
}

export default combineReducers({
    quote: randomQuoteReducer
})