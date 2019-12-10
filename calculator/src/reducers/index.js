import { combineReducers } from 'redux';

const dummyReducer = () => {
    return 'dummy';
}


export default combineReducers({
    dummy: dummyReducer
})