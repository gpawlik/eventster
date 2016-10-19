import { combineReducers } from 'redux';

// Reducers
import usersReducer from './users-reducer';
import eventsReducer from './events-reducer';
import profileReducer from './profile-reducer';
import flashReducer from './flash-reducer';

// Combine Reducers
var rootReducer = combineReducers({
    usersState: usersReducer,
    eventsState: eventsReducer,
    profileState: profileReducer,
    flashState: flashReducer
});

export default rootReducer;
