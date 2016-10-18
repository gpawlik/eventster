import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import usersReducer from './users-reducer';
import eventsReducer from './events-reducer';
import profileReducer from './profile-reducer';

// Combine Reducers
var reducers = combineReducers({
    usersState: usersReducer,
    eventsState: eventsReducer,
    profileState: profileReducer,
    form: formReducer
});

export default reducers;
