import axios from 'axios';
import * as types from './types';

export function getEvents() {
    return dispatch => {
        return axios.get('/api/events').then(res => {                        
            dispatch({
                type: types.GET_EVENTS_SUCCESS,
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
                    type: types.GET_EVENT_SUCCESS,
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
                    type: types.DELETE_EVENT_SUCCESS,
                    eventId
                }); 
            }); 
    }
}
