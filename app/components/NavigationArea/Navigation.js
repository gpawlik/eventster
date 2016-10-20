import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

class NavigationBar extends React.Component {  

    logout (e) {
        e.preventDefault();
        this.props.logout();
    }    
     
    render() {
        
        const { isAuthenticated } = this.props.auth;
        
        const userLinks = (
            <ul>
                <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>         
            </ul>
        );
        
        const guestLinks = (
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>            
            </ul>
        );
        
        return (
            <nav className="MainNav">
                <ul>
                    <li><Link to="/">Events</Link></li>
                    <li><Link to="/users">Users</Link></li>                                
                    <li><Link to="/about">About</Link></li>                    
                </ul>
                { isAuthenticated ? userLinks : guestLinks } 
            </nav>
        )        
    }       
};

NavigationBar.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.authState
    }
}

export default connect(mapStateToProps, { logout })(NavigationBar);