import axios from 'axios';
import * as types from './types';


export function getUsers() {
    return dispatch => {
        return axios.get('/api/users')
            .then(res => { 
                dispatch({
                    type: types.GET_USERS_SUCCESS,
                    users: res.data
                });                             
            });    
    }
};

export function getUser(userId) {
    return dispatch => {
        return axios.get('/api/users/' + userId)
            .then(res => { 
                dispatch({
                    type: types.GET_USER_SUCCESS,
                    user: res.data.user
                });             
            });        
    }
};
   
export function addUser() {
    const newUser = 'New USER ' + Math.round(Math.random()*100);       
    return dispatch => {
        return axios.post('/api/users', { name: newUser })
            .then(res => {  
                dispatch({
                    type: types.ADD_USER_SUCCESS,
                    user: res.data.user
                });  
            });         
    }   
};

export function editUser(user) {
    const newName = user.name + ' [edited]';      
            
    return dispatch => {
        return axios.put('/api/users/' + user._id, {
                name: newName
            })
            .then(res => {                
                dispatch({
                    type: types.EDIT_USER_SUCCESS,
                    user: res.data.user
                });                 
            });          
    }       
};

export function deleteUser(userId) {   
    return dispatch => {
        return axios.delete('/api/users/' + userId)
            .then(() => {                
                dispatch({
                    type: types.DELETE_USER_SUCCESS,
                    userId
                });                
            });         
    }                            
};