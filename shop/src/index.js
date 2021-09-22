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
  { id: 0, name: 'White and Black', quantity: 10 },
  { id: 1, name: 'Grey Yordan', quantity: 11 },
  { id: 2, name: 'Flowey', quantity: 12 }
];

const reducer = (state = defaultState, action) => {
  if (action.type === '항목추가') { // 이미 장바구니에 있는 항목이면 해당 상품수량 증가
    let copy = [...state];
    let id = copy.findIndex(el => { return el.id === action.payload.id });
    if (id === -1) {
      copy.push(action.payload);
    }
    else {
      copy[id].quantity++;
    }
    return copy
  }
  else if (action.type === '수량증가') { // 수량증가라는 이름의 데이터수정방법 만들기
    let copy = [...state];
    copy[action.payload].quantity++;
    return copy
  }
  else if (action.type === '수량감소') {
    let copy = [...state];
    copy[action.payload].quantity--;
    if (copy[action.payload].quantity <= 0) {
      copy[action.payload].quantity = 0;
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
