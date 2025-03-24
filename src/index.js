import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import DataContext, { data } from './data/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

