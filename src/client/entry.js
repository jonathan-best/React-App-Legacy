import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/controllers/AppController'
import "./styles/app";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('react-app')
);
