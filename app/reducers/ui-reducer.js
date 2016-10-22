import { UI_TOGGLE_NAVIGATION } from '../actions/types';

const initialState = {
    isMobileNavigationOpen: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case UI_TOGGLE_NAVIGATION:
            const newState = action.toggleState !== 'undefined' ? action.toggleState : !state.isMobileNavigationOpen;
            return Object.assign({}, state, { isMobileNavigationOpen: newState });
        default: return state;
    }    
}