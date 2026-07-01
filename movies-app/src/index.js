import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextMoviesProvider } from '../src/components/Store/index.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ContextMoviesProvider>
    <App />
  </ContextMoviesProvider>
  </BrowserRouter>
);