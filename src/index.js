import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/portfolio' : ''}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);