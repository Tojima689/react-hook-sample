import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './components/statecomponent';
import EffectFunc from './components/effectcomponent';
import ReducerCounter from './components/reducercomponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>useState()デモ</h2>
    <Counter />
    <hr></hr>
    <h2>useEffect()デモ</h2>
    <EffectFunc />
    <hr></hr>
    <h2>useReducer()デモ</h2>
    <ReducerCounter />
    <hr></hr>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
