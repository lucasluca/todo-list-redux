import React, { Component } from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from './todo/todo.jsx'
import About from './about/about.jsx'

export default class Routes extends Component {
    render() {
        return (

            <Router history={hashHistory}>
                <Route path='/todos' component={Todo} />
                <Route path='/about' component={About} />
                <Redirect from='*' to='/todos' />
            </Router>
        )
    }
}