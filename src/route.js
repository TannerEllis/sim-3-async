import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';


export default (    
    <Switch>
        <Route exact path="/" component={Auth} /> 
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/search" component={Search} />
    </Switch>
) 