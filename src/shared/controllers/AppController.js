import React from 'react';
import { DefaultRoute, Route, RouteHandler } from 'react-router';

export default class AppController extends React.Component{
  render() {
    return (
      <div>
        <div><h1>APP Controller Template</h1></div>
        {this.props.children}
      </div>
    );
  }
};
