import { 
    GET_EVENTS_SUCCESS, 
    GET_EVENT_SUCCESS, 
    ADD_EVENT_SUCCESS, 
    EDIT_EVENT_SUCCESS, 
    DELETE_EVENT_SUCCESS 
} from '../actions/types';

const initialState = {
    events: []    
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_EVENTS_SUCCESS:                   
            return Object.assign({}, state, { events: action.events });
        case DELETE_EVENT_SUCCESS:
            return Object.assign({}, state, { 
                events: state.events.filter(event => event._id !== action.eventId) 
            });           
        default: 
            return state;
    }    
};