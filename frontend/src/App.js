import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './template/custom.css'
import Routes from './routes'
import Menu from './template/menu'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;
