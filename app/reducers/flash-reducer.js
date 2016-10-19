import shortid from 'shortid';
import { ADD_FLASH_MESSAGE } from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid.generate(), // generate random ID so we can delete it easily later
                    type: action.message.type,
                    text: action.message.text,
                }
            ]
        default: return state;
    }    
}