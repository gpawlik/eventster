const initialState = {
    event: {}
};

export default function(state = initialState, action) {
    
    switch (action.type) {
        case 'GET_EVENT_SUCCESS':
            return Object.assign({}, state, { event: action.event });
    }
    
    return state;
}