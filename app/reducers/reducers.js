import { combineReducers } from 'redux';

// Reducers
import usersReducer from './users-reducer';
import eventsReducer from './events-reducer';
import profileReducer from './profile-reducer';

// Combine Reducers
var reducers = combineReducers({
    usersState: usersReducer,
    eventsState: eventsReducer,
    profileState: profileReducer
});

export default reducers;
