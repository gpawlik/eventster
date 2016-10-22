import * as types from './types';

export function toggleNavigation(toggleState) {
    return {
        type: types.UI_TOGGLE_NAVIGATION,
        toggleState
    }
}