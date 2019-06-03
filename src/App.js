import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import{
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import MediaQuery from 'react-responsive';


import Home from './Pages/Home.js'
import Info_copy from './Pages/Info_copy.js'
import Story from './Pages/Story.js'
import Purchase from './Pages/Purchase'
import Options from './Pages/Options'
import Purchase_Mobile from './Pages/Purchase_Mobile'


class App extends Component {
  render() {
    return (
        <div>
          <Home/>
          <Info_copy/>
          <Options/>
          <Story/>
            <MediaQuery minWidth={415}>
                {matches => {
                    return matches
                        ? <Route exact path='/purchase' component={Purchase}/>
                        : <Route exact path='/purchase' component={Purchase_Mobile}/>
                }}
            </MediaQuery>
        </div>
    );
  }
}

export default App;
