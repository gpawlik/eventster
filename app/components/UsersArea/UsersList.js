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
                        <li key={idx}>
                            <Link to={'/user/' + user.username}>
                                <span className="thumbnail-small"></span>
                                <span className="list-item-title">{user.username}</span> 
                            </Link>                            
                            <span onClick={() => deleteUser(user._id) } className="delete-icon">x</span>                             
                        </li>
                    );
                })}
                </ul>                
            </div>
        )
    }
};

export default UsersList;