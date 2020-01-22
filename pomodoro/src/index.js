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
    breakLength: 5,
    sessionLength: 25,
    session: true,
    timer: {
        startTime: 0,
        stopTime: 0,
        elapsed: 0
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