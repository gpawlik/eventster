import React from 'react';
import { Link } from 'react-router';

class UsersList extends React.Component {    
    render() {      
        const { users, deleteUser } = this.props;            
        return (
            <div className="UsersListArea">
                <h3>Users list?</h3>
                <ul className="UsersList">
                {users.map((user, idx) => {
                    return (
                        <li key={idx}>{user.username} 
                            <button onClick={() => deleteUser(user._id) }>delete</button>  
                            <Link to={'/user/' + user.username}>Show profile!</Link>
                        </li>
                    );
                })}
                </ul>                
            </div>
        )
    }
};

export default UsersList;