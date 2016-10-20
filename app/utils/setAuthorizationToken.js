import axios from 'axios';

export default function setAuthorizationToken(token) {
    if(token) { // Add header to every request
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Standars naming
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}