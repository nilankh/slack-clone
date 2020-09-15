import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import UserProvider from './providers/UserProvider';

ReactDOM.render(
  <UserProvider data="1">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);
