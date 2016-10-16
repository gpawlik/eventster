import React from 'react';
import './styles/App.scss';
import axios from 'axios';

const App = React.createClass({    
    getInitialState: function() {
        this.getUsers();
        return { users: [] }
    },
    getUsers: function() {
        axios.get('api/users')
            .then(response => {              
                return response.data;
            })
            .then(users => {
                this.setState({ users: users });
            });
    },    
    addNew: function() {
        const newUser = 'New USER ' + Math.round(Math.random()*100);       
              
        axios.post('/api/users', {
                name: newUser
            })
            .then(response => {  
                console.log('Success!', response.data.message); 
                return response.data.user;
            })
            .catch(console.log)
            .then(user => {                 
                const _newUsers = this.state.users.slice();
                _newUsers.push(user);                        
                this.setState({users: _newUsers})
            });        
    },
    deleteUser: function(idx) {                               
        axios.delete('/api/users/' + idx)
            .then(response => {                
                console.log('Success!', response.data.message); 
                return response.data.user;
            })
            .catch(console.log)
            .then(user => {                
                const _users = this.state.users.slice();
                const updatedUsers = _users.filter(user => {                    
                    return user._id !== idx;
                });
                this.setState({users: updatedUsers}) 
            }); 
    },
    editUser: function(user) {
        const userId = user._id;
        const newName = user.name + ' [edited]';      
              
        axios.put('/api/users/' + userId, {
                name: newName
            })
            .then(response => {                
                console.log('Success!', response.data.message); 
                return response.data.user;
            })
            .catch(console.log)
            .then(user => {                
                const _users = this.state.users.slice();
                const updatedUsers = _users.map(user => {                    
                    if (user._id === userId) user.name = newName; 
                    return user;
                });
                this.setState({users: updatedUsers})                 
            });         
    },
    render() {         
        return (
            <div className="App">
                <h3>Users list</h3>
                <ul className="UsersList">
                {this.state.users.map((user, idx) => {
                    return (<li key={idx}>{user.name} 
                                <button onClick={this.deleteUser.bind(this, user._id)}>delete</button>
                                <button onClick={this.editUser.bind(this, user)}>edit</button>
                            </li>);
                })}
                </ul>
                <button onClick={this.addNew}>Add new</button>
            </div>
        )
    }
});

export default App;