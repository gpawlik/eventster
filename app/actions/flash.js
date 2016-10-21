import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';

export function addFlashMessage(message, category) {
    return {
        type: ADD_FLASH_MESSAGE,
        message,
        category
    }
}

export function deleteFlashMessage(id) {
    return {
        type: DELETE_FLASH_MESSAGE,
        id
    }
}