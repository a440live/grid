import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Purchase from './Pages/Purchase';
import Options from './Pages/Options';

import * as serviceWorker from './serviceWorker';



const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/purchase" component={Purchase} />
            <Route path="/options" component={Options} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
