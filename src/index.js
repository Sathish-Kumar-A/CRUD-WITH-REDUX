import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers,createStore } from 'redux';
import {crudReducer} from "./users"
import { Provider } from 'react-redux';


const rootReducer = combineReducers({ crudReducer });
const store=createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

