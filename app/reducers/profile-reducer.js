const initialState = {
    user: {}
};

export default function(state = initialState, action) {
    
    switch (action.type) {
        case 'GET_USER_SUCCESS':
            return Object.assign({}, state, { user: action.user });
    }
    
    return state;
}