import { combineReducers } from 'redux';

// Reducers
import usersReducer from './users-reducer';
import eventsReducer from './events-reducer';

// Combine Reducers
var reducers = combineReducers({
    usersState: usersReducer,
    eventsState: eventsReducer
});

export default reducers;
