import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import routes from "../shared/routes/routes"
import createBrowserHistory from "history/lib/createBrowserHistory";
import "./styles/app";

let history = createBrowserHistory();

ReactDOM.render(
   <Router history={history}>{routes}</Router>,
   document.getElementById('react-app')
 );
