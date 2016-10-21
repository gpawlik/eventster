import React from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flash';

// Wrap the component in HOC - higher order component
export default function(ComposedComponent) {
    class Admin extends React.Component {
        
        componentWillMount() {
            if(!this.props.isAuthenticated || !this.props.isAdmin) {
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'You need to be an admin to view this page',
                    category: 'user_need_admin'
                });
                this.context.router.push('/login');
            }
        }
        
        componentWillUpdate(nextProps) {
            if(!nextProps.isAuthenticated && !nextProps.isAdmin) {
                this.context.router.push('/');
            }
        }
        
        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }  
    
    Admin.propTypes = {
        isAuthenticated: React.PropTypes.bool.isRequired,
        isAdmin: React.PropTypes.bool,
        addFlashMessage: React.PropTypes.func.isRequired
    };
    
    Admin.contextTypes = {
        router: React.PropTypes.object.isRequired
    }
    
    function mapStateToProps(state) {
        return {
            isAuthenticated: state.authState.isAuthenticated,
            isAdmin: state.authState.user.isAdmin
        }
    }
    
    return connect(mapStateToProps, { addFlashMessage })(Admin);  
}

