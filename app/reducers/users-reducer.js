const initialState = {
    users: []
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case 'GET_USERS_SUCCESS':
        return Object.assign({}, state, { users: action.users });

    case 'ADD_USER_SUCCESS':
        const usersAfterAdd = state.users.slice();
        usersAfterAdd.push(action.user);
        return Object.assign({}, state, { users: usersAfterAdd });    
    
    case 'EDIT_USER_SUCCESS':        
        const usersAfterEdit = state.users.map(user => {                    
            if (user._id === action.user._id) user.name = action.user.name; 
            return user;
        });
        return Object.assign({}, state, { users: usersAfterEdit }); 
    
    case 'DELETE_USER_SUCCESS':
        const usersAfterDelete = state.users.filter(user => user._id !== action.userId);
        return Object.assign({}, state, { users: usersAfterDelete }); 
  }

  return state;

}

export default userReducer;
