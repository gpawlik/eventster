import React from 'react';

const UsersList = React.createClass({    
    render() {         
        return (
            <div className="UsersListArea">
                <h3>Users list</h3>
                <ul className="UsersList">
                {this.props.users.map((user, idx) => {
                    return (
                        <li key={idx}>{user.name} 
                            <button onClick={() => this.props.deleteUser(user._id) }>delete</button>
                            <button onClick={() => this.props.editUser(user) }>edit</button>
                        </li>
                    );
                })}
                </ul>
                <button onClick={this.props.addUser}>Add new user</button>
            </div>
        )
    }
});

export default UsersList;