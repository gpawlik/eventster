import axios from 'axios';
import store from '../store';
import * as actions from '../actions/eventActions';

export function getEvents() {
    actions.getEvents();
};

export function getEvent(eventId) {
    return axios.get('/api/events/' + eventId)
        .then(response => { 
            store.dispatch(actions.getUserSuccess(response.data.event));             
            return response;
        });
};
   
export function addEvent() {
    const newUser = 'New USER ' + Math.round(Math.random()*100);       
            
    return axios.post('/api/events', { name: newUser })
        .then(response => {  
            store.dispatch(actions.addUserSuccess(response.data.event));  
            return response;
        });    
};

export function editEvent(event) {
    const newName = event.name + ' [edited]';      
            
    return axios.put('/api/events/' + event._id, {
            name: newName
        })
        .then(response => {                
            store.dispatch(actions.editUserSuccess(response.data.event)); 
            return response.data.event;
        });         
};

export function deleteEvent(eventId) {                               
    return axios.delete('/api/events/' + eventId)
        .then(response => {                
            store.dispatch(actions.deleteUserSuccess(eventId)); 
            return response;
        }); 
};