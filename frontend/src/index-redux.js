import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import counterReducer from './counterReducer'
import Increment from './increment/increment'

const reducers = combineReducers({
    counter: counterReducer
})


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Increment/>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
