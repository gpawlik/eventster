import React from 'react';

class EventsList extends React.Component {    
    render() {         
        return (
            <div className="EventsListArea">
                <h3>Events list?!</h3>
                <ul className="EventsList">
                {this.props.users.map((user, idx) => {
                    return (
                        <li key={idx}>{user.username} 
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
};

export default EventsList;