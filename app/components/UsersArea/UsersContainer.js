import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import Preloader from '../../common/Preloader';
import { getUsers, deleteUser } from '../../actions/userActions';
import store from '../../store';

class UsersContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }     
    
    componentDidMount() {
        this.props.getUsers().then(res => {
            this.setState({ isLoading: false });
        });
    }

    render() {         
        return (
            <div>
                {this.state.isLoading && <Preloader />}
                <UsersList 
                    users={this.props.users}
                    deleteUser={this.props.deleteUser}             
                />
            </div>
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