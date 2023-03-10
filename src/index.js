/**
 * @file index.js is the root file for the application. It replaces 'root' element in index.html with the whole page content.
 * @author Czeslaw Surowka
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name='Football World Cup 2023' />
  </React.StrictMode>
);
