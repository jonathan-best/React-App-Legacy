import React from 'react';
import { Link } from 'react-router-dom';

export default class Component extends React.Component {
  render() {
    return(
      <div>
          <h2>Component</h2>
          <Link to="/about">Test Link</Link>
      </div>
    );
  }
};
