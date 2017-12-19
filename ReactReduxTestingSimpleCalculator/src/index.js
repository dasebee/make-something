import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import calculatorReducers from './reducers/calculatorReducers';
import App from './components/App';


const app = document.getElementById('app');

const store = createStore(calculatorReducers);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, app
)