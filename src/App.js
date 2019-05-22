import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home.js'
import Info_copy from './Pages/Info_copy.js'
import Story from './Pages/Story.js'
import Purchase from './Pages/Purchase'


class App extends Component {
  render() {
    return (
        <div>
          <Home/>
          <Info_copy/>
          <Story/>
          <Purchase/>
        </div>
    );
  }
}

export default App;
