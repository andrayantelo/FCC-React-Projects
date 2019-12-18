import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';

const myLogger = (store) => (next) => (action) => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log("Next state.summary.formula: ", store.getState().summary.formula)
    console.log("Next state: ", store.getState());
    console.groupEnd();
    return result;
}

const store = createStore(reducers, {}, applyMiddleware(myLogger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
