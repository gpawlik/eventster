import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import { getUsers, deleteUser } from '../../actions/userActions';
import store from '../../store';

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsers()
    }

    render() {         
        return (
            <UsersList 
                users={this.props.users}
                deleteUser={this.props.deleteUser}             
            />
        )
    }        
};

UsersContainer.propTypes = {
    users: React.PropTypes.array.isRequired,
    getUsers: React.PropTypes.func.isRequired,
    deleteUser: React.PropTypes.func.isRequired
}

const mapStateToProps = function(store) {
    return {
        users: store.usersState.users
    };
};

export default connect(mapStateToProps, { getUsers, deleteUser })(UsersContainer);