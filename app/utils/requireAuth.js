import React from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flash';

// Wrap the component in HOC - higher order component
export default function(ComposedComponent) {
    class Authenticate extends React.Component {
        
        componentWillMount() {
            if(!this.props.isAuthenticated) {
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'You need to be authenticated to view this page'
                });
                this.context.router.push('/login');
            }
        }
        
        componentWillUpdate(nextProps) {
            if(!nextProps.isAuthenticated) {
                this.context.router.push('/');
            }
        }
        
        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }  
    
    Authenticate.propTypes = {
        isAuthenticated: React.PropTypes.bool.isRequired,
        addFlashMessage: React.PropTypes.func.isRequired
    };
    
    Authenticate.contextTypes = {
        router: React.PropTypes.object.isRequired
    }
    
    function mapStateToProps(state) {
        return {
            isAuthenticated: state.authState.isAuthenticated
        }
    }
    
    return connect(mapStateToProps, { addFlashMessage })(Authenticate);  
}

