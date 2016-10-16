export function getUsersSuccess(users) {
    return {
        type: 'GET_USERS_SUCCESS',
        users
    }
};

export function addUserSuccess(user) {
    return {
        type: 'ADD_USER_SUCCESS',
        user
    }
};

export function editUserSuccess(user) {
    return {
        type: 'EDIT_USER_SUCCESS',
        user
    }
};

export function deleteUserSuccess(userId) {
    return {
        type: 'DELETE_USER_SUCCESS',
        userId
    }
};