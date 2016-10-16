import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import MainLayout from './components/MainLayout';

// Pages
import UsersContainer from './components/UsersArea/UsersContainer';
import EventsContainer from './components/EventsArea/EventsContainer';
import Profile from './components/ProfileArea/Profile';
import About from './components/AboutArea/About';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={UsersContainer} />
      <Route path="events" component={EventsContainer} />
      <Route path="profile" component={Profile} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);