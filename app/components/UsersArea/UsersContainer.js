import React from 'react';
import axios from 'axios';
import UsersList from './UsersList';

const UsersContainer = React.createClass({
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
    addUser: function() {
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
            <UsersList 
                users={this.state.users}
                editUser={this.editUser}
                deleteUser={this.deleteUser} 
                addUser={this.addUser} 
            />
        )
    }        
});

export default UsersContainer;