import axios from 'axios';

export function userSignupRequest(data) {
    return dispatch => {
        return axios.post('/api/users', data);
    }
}

export function isUserExists(identifier) {
    return dispatch => {
        return axios.get(`/api/users/${identifier}`);
    }
}