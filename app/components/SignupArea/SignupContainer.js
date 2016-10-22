import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signup';
import { addFlashMessage } from '../../actions/flash';

class SignupPage extends React.Component {
    render() {
        const { userSignupRequest, isUserExists, addFlashMessage } = this.props;
        return(
            <div>
                <h3>SignUp Area</h3>
                <div className="content-wrapper">
                    <SignupForm 
                        userSignupRequest={userSignupRequest} 
                        isUserExists={isUserExists}
                        addFlashMessage={addFlashMessage} 
                        />
                </div>
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
    { userSignupRequest, isUserExists, addFlashMessage } // shorthand for mapActionsToProps
)(SignupPage);