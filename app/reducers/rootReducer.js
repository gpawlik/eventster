import { combineReducers } from 'redux';

// Reducers
import usersReducer from './users-reducer';
import eventsReducer from './events-reducer';
import profileReducer from './profile-reducer';
import flashReducer from './flash-reducer';
import authReducer from './auth-reducer';

// Combine Reducers
var rootReducer = combineReducers({
    usersState: usersReducer,
    eventsState: eventsReducer,
    profileState: profileReducer,
    flashState: flashReducer,
    authState: authReducer
});

export default rootReducer;
