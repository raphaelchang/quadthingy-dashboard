import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from 'semantic-ui-react';

var App = React.createClass({
    render: function() {
        return (
                <Header as='h1'>Quadthingy Dashboard</Header>
               );
    }
});

module.exports = App;
