import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../handlers/Home";
import About from "../handlers/About";
import NotFound from "../handlers/NotFound";

export default class AppController extends React.Component{

  constructor(props) {
		super(props);
	}

  render() {
    return (
      <div>
        <div><h1>APP Controller Template</h1></div>
          <Switch>
            <Route exact path='/' component={ Home } />
					  <Route exact path="/about" component={ About } />
            <Route component={NotFound} />
  				</Switch>
      </div>
    );
  }
};
