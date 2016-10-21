import React from 'react';
import { Route, IndexRoute } from 'react-router';

import requireAuth from './utils/requireAuth';
import requireAdmin from './utils/requireAdmin';

// Layouts
import MainLayout from './components/MainLayout';

// Pages
import UsersContainer from './components/UsersArea/UsersContainer';
import EventsContainer from './components/EventsArea/EventsContainer';
import EventPageContainer from './components/EventsArea/EventPageContainer';
import ProfileContainer from './components/ProfileArea/ProfileContainer';
import SignupContainer from './components/SignupArea/SignupContainer';
import NewEventPage from './components/EventsArea/NewEventPage';
import About from './components/AboutArea/About';
import Login from './components/LoginArea/Login';

export default (
  <Route component={MainLayout}>
    <Route path="/" component={EventsContainer} />
    <Route path="/event/:eventId" component={EventPageContainer} />  
    <Route path="/users" component={requireAdmin(UsersContainer)} />
    <Route path="/user/:userId" component={requireAuth(ProfileContainer)} />
    <Route path="/new-event" component={requireAdmin(NewEventPage)} />               
    <Route path="/about" component={About} />    
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignupContainer} />
  </Route>
);