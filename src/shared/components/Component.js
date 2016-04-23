import React from 'react';
import { Link } from 'react-router';

export default class Component extends React.Component {
    render() {
        return(
            <div>
                <h2>Component</h2>
                <Link to="/test">Test Link</Link>
            </div>
        );
    }
};
