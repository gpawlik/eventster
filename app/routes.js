import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/MainLayout';

// Pages
import UsersContainer from './components/UsersArea/UsersContainer';
import EventsContainer from './components/EventsArea/EventsContainer';
import ProfileContainer from './components/ProfileArea/ProfileContainer';
import About from './components/AboutArea/About';
import Login from './components/LoginArea/Login';

export default (
  <Route component={MainLayout}>
    <Route path="/" component={EventsContainer} />
    <Route path="/users" component={UsersContainer} />
    <Route path="/user/:userId" component={ProfileContainer} />            
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
  </Route>
);