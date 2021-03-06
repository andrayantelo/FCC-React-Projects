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

// parts of state that can be component side:
// timeRemaining, timerRunning, elapsed

const preloadedState = {
    breakLength: 3*1000,
    sessionLength: 5*1000,
    currentSession: 5*1000,
    timer: { 
        startTime: 0,
        pauseTime: 0,
        timerRunning: false,
        display: 5*1000
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