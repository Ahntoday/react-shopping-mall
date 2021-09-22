import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

let alertDefaultState = true;

const alertReducer = (state = alertDefaultState, action) => {
  if (action.type === 'closeAlert') {
    state = false;
    return state;
  }
  else {
    return state
  }
}

let defaultState = [
  { id: 0, name: 'White and Black', quantity: 2 },
  { id: 2, name: 'Grey Yordan', quantity: 5 },
  { id: 3, name: 'Flowey', quantity: 3 }
];

const reducer = (state = defaultState, action) => {
  if (action.type === '수량증가') { // 수량증가라는 이름의 데이터수정방법 만들기
    let copy = [...state];
    copy[0].quantity++;
    return copy
  }
  else if (action.type === '수량감소') {
    let copy = [...state];
    copy[0].quantity--;
    if (copy[0].quantity <= 0) {
      copy[0].quantity = 0;
    }
    return copy
  }
  else {
    return state
  }
}

let store = createStore(combineReducers({ reducer, alertReducer }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
