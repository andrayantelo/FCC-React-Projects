import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';

const myLogger = (store) => (next) => (action) => {
    console.log("Logged action: ", action);
    next(action);
}

const store = createStore(reducers, {}, applyMiddleware(myLogger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
