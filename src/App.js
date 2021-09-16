import React, {useState} from 'react';
import Tweet from './components/tweet';
import Home from './components/home';
import Error from './components/error';
import Nav from './components/nav'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
    return(
        <Router>
            <Nav />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/post'>
                    <Tweet />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}



export default App;