import { combineReducers } from 'redux';

// Reducers
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';
import eventsReducer from './events-reducer';
import eventReducer from './event-reducer';
import flashReducer from './flash-reducer';
import authReducer from './auth-reducer';
import uiReducer from './ui-reducer';

// Combine Reducers
var rootReducer = combineReducers({
    usersState: usersReducer,
    profileState: profileReducer,
    eventsState: eventsReducer,
    eventState: eventReducer,    
    flashState: flashReducer,
    authState: authReducer,
    uiState: uiReducer
});

export default rootReducer;
