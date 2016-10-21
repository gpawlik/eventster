import shortid from 'shortid';
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types';
import findIndex from 'lodash/findIndex';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_FLASH_MESSAGE:
            const messageExists = findIndex(state, { category: action.message.category });
            if(messageExists >= 0) {
                return state;
            }
            else {
                return [
                    ...state,
                    {
                        id: shortid.generate(), // generate random ID so we can delete it easily later
                        type: action.message.type,
                        text: action.message.text,
                        category: action.message.category
                    }
                ]                
            }
        case DELETE_FLASH_MESSAGE:
            const index = findIndex(state, { id: action.id })            
            if(index >= 0) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ]                
            }
        default: return state;
    }    
}