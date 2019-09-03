import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
// import Profile from './components/Profile';






export const Router = () =>(
    <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={Login}></Route> 

        <Redirect from="/" exact to="/home" />
    </Switch>
)

export default Router;