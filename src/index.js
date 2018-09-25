import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import App from './step3/App';

import registerServiceWorker from './registerServiceWorker';


// Reducer
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}

// Store
const store = createStore(counter)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

registerServiceWorker();
