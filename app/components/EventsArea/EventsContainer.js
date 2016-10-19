import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import UsersList from './EventsList';
import * as userApi from '../../api/user-api';
import store from '../../store';

class EventsContainer extends React.Component {
    
    componentDidMount() {
        userApi.getUsers()
    }

    render() {         
        return (
            <UsersList 
                users={this.props.users}
                addUser={userApi.addUser}
                editUser={userApi.editUser}
                deleteUser={userApi.deleteUser}                
            />
        )
    }        
};

const mapStateToProps = function(store) {
    return {
        users: store.usersState.users
    };
};

export default connect(mapStateToProps)(EventsContainer);