import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import reducers from './reducers';

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.info('Dispatching', action);
    let result = next(action);
    console.log("Next state ", store.getState());
    console.groupEnd();
    return result;
};

const preloadedState = {
    timer: {
        breakLength: 2*1000,
        workLength: 3*1000,
        startTime: 0,
        timerRunning: false,
        displayTime: 3*1000,
        currentSession: "workLength"
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// second argument is initial state
const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)