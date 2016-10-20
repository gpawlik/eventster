import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signup';
import { addFlashMessage } from '../../actions/flash';

class SignupPage extends React.Component {
    render() {
        const { userSignupRequest, addFlashMessage } = this.props;
        return(
            <div>
                <h3>SignUp Area</h3>
                <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
            </div>
        );
    }
};

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(
    null, // simple mapStateToProps
    { userSignupRequest, addFlashMessage } // shorthand for mapActionsToProps
)(SignupPage);