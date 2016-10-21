import axios from 'axios';
import { 
    GET_EVENTS_SUCCESS, 
    GET_EVENT_SUCCESS, 
    ADD_EVENT_SUCCESS, 
    EDIT_EVENT_SUCCESS, 
    DELETE_EVENT_SUCCESS 
} from './types';

export function getEvents() {
    return dispatch => {
        return axios.get('/api/events').then(res => {                        
            dispatch({
                type: GET_EVENTS_SUCCESS,
                events: res.data
            })
        });
    }
}

export function getEvent(eventId) {
    return dispatch => {
        return axios.get('/api/events/' + eventId)
            .then(res => { 
                dispatch({
                    type: GET_EVENT_SUCCESS,
                    event: res.data
                });                       
            });
    }
};

export function createEvent(data) {
    return dispatch => {
        return axios.post('/api/events', data);
    }
}

export function deleteEvent(eventId) {
    return dispatch => {
        return axios.delete('/api/events/' + eventId)
            .then(res => {                
                dispatch({
                    type: DELETE_EVENT_SUCCESS,
                    eventId
                }); 
            }); 
    }
}
