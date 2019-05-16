import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home.js'
import Info from './Pages/Info.js'
import Info_copy from './Pages/Info_copy.js'
import Story from './Pages/Story.js'


class App extends Component {
  render() {
    return (
        <div>
          <Home/>
          <Info_copy/>
          <Story/>
        </div>
    );
  }
}

export default App;
