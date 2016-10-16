import axios from 'axios';
import store from '../store';
import * as actions from '../actions/UserActions';

export function getUsers() {
    return axios.get('api/users')
        .then(response => { 
            store.dispatch(actions.getUsersSuccess(response.data));             
            return response;
        });
};
   
export function addUser() {
    const newUser = 'New USER ' + Math.round(Math.random()*100);       
            
    return axios.post('/api/users', { name: newUser })
        .then(response => {  
            store.dispatch(actions.addUserSuccess(response.data.user));  
            return response;
        });    
};

export function editUser(user) {
    const newName = user.name + ' [edited]';      
            
    return axios.put('/api/users/' + user._id, {
            name: newName
        })
        .then(response => {                
            store.dispatch(actions.editUserSuccess(response.data.user)); 
            return response.data.user;
        });         
};

export function deleteUser(userId) {                               
    return axios.delete('/api/users/' + userId)
        .then(response => {                
            store.dispatch(actions.deleteUserSuccess(userId)); 
            return response;
        }); 
};