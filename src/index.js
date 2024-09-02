// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './App.css';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the app to the root.
root.render(<Provider store={store}>
  <App />
</Provider>);