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
    state : {
        breakLength: 5*60000,
        sessionLength: 25*60000,
        session: true,
        startTime: 0,
        stopTime: 0,
        timerRunning: false,
        elapsed: 0,
        timeRemaining: 25*60000
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