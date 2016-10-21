import React from 'react';
import { Route, IndexRoute } from 'react-router';

import requireAuth from './utils/requireAuth';

// Layouts
import MainLayout from './components/MainLayout';

// Pages
import UsersContainer from './components/UsersArea/UsersContainer';
import EventsContainer from './components/EventsArea/EventsContainer';
import ProfileContainer from './components/ProfileArea/ProfileContainer';
import SignupContainer from './components/SignupArea/SignupContainer';
import NewEventPage from './components/EventsArea/NewEventPage';
import About from './components/AboutArea/About';
import Login from './components/LoginArea/Login';

export default (
  <Route component={MainLayout}>
    <Route path="/" component={EventsContainer} />
    <Route path="/users" component={UsersContainer} />
    <Route path="/user/:userId" component={ProfileContainer} />            
    <Route path="/about" component={About} />
    <Route path="/new-event" component={requireAuth(NewEventPage)} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignupContainer} />
  </Route>
);