import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/controllers/AppController'
import "./styles/app";

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('react-app')
);
