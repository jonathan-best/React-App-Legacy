import React from 'react';
import Component from '../components/Component';

export default class PageHandler extends React.Component{
  render() {
    return (
      <div className="nav">
        <h2>Handler</h2>
        <Component />
      </div>
    );
  }
};
