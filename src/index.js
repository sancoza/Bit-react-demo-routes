import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const DOMroot = document.getElementById('root');
const root = ReactDOM.createRoot(DOMroot);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
