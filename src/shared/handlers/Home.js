import React from 'react';
import Component from '../components/Component';

export default class Home extends React.Component{
  render() {
    return (
      <div className="nav">
        <h2>Home</h2>
        <Component />
      </div>
    );
  }
};
