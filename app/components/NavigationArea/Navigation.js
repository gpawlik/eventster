import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { toggleNavigation } from '../../actions/uiActions';
import classNames from 'classnames';

class NavigationBar extends React.Component {  

    logout (e) {
        e.preventDefault();
        this.props.logout();
    }  
    
    toggleNavigation(toggleState) {
        if(toggleState !== this.props.ui.isMobileNavigationOpen) {
            this.props.toggleNavigation(toggleState);    
        }        
    }      
     
    render() {
        
        const { isAuthenticated, user } = this.props.auth;
        const { isMobileNavigationOpen } = this.props.ui;
                
        const userLinks = [
            (<li key="0"><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>),
            (<li key="1"><Link to={'/user/' + user.username}>My profile</Link></li>)
        ];
        
        const guestLinks = [
            (<li key="0"><Link to="/login">Login</Link></li>),
            (<li key="1"><Link to="/signup">Signup</Link></li>)
        ];
        
        const adminLinks = [
            (<li key="0"><Link to="/users">Users</Link></li>),
            (<li key="1"><Link to="/new-event">New event</Link></li>)
        ];
        
        const navClassName = classNames('MainNav', {'isMobile': isMobileNavigationOpen});
        
        return (
            <nav className={navClassName} onClick={this.toggleNavigation.bind(this, false)}>
                <ul className="MainLinks">
                    <li><Link to="/">Events</Link></li>                                                   
                    <li><Link to="/about">About</Link></li>
                    { user.isAdmin ? adminLinks : '' }                                        
                </ul>                
                <ul className="AccountLinks">
                    { isAuthenticated ? userLinks : guestLinks } 
                </ul>           
            </nav>
        )        
    }       
};

NavigationBar.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired,
    toggleNavigation: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.authState,
        ui: state.uiState
    }
}

export default connect(mapStateToProps, { logout, toggleNavigation })(NavigationBar);