import React from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../../common/TextFieldGroup';
import { login } from '../../actions/LoginActions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }   
    
    onSubmit(e) {
        e.preventDefault();
        if(this.isValid()) {            
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => this.context.router.push('/'),
                (err) => this.setState({ errors: err.data.errors, isLoading: false })
            );
        }
    } 
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    validateContact(data) {
        const errors = {};
        if (!data.identifier || data.identifier.trim() === '') {
            errors.identifier = 'Enter a Title';
        }
        if (!data.password || data.password.trim() === '') {
            errors.password = 'Enter a Password';
        }
        return { 
            errors,
            isValid: !Object.keys(errors).length
        };
    }  
    
    isValid() {
        const { errors, isValid } = this.validateContact(this.state); 
        if(!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }  
    
    render() {
        // deconstruct variables from state
        const { identifier, password, errors, isLoading } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                    field="identifier"
                    label="Usersname / Email"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                />
                <TextFieldGroup 
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                />
                <button disabled={isLoading}>Login</button>
            </form>
        );
    }
};

LoginForm.propTypes = {
    login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);