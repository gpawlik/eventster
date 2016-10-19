import React from 'react';
import { Link } from 'react-router';

class UsersList extends React.Component {    
    render() {         
        return (
            <div className="UsersListArea">
                <h3>Users list?</h3>
                <ul className="UsersList">
                {this.props.users.map((user, idx) => {
                    return (
                        <li key={idx}>{user.name} 
                            <button onClick={() => this.props.deleteUser(user._id) }>delete</button>
                            <button onClick={() => this.props.editUser(user) }>edit</button>
                            <Link to={'/user/' + user._id}>Show profile</Link>
                        </li>
                    );
                })}
                </ul>
                <button onClick={this.props.addUser}>Add new user</button>
            </div>
        )
    }
};

export default UsersList;