import React from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../../common/TextFieldGroup';
import { createEvent } from '../../actions/eventActions';

class NewEventPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            title: '',
            errors: {},
            isLoading: false
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state).then(res => {
            console.log(res.data);
        });
    }
    
    render () {
        const { title, errors, isLoading } = this.state;
        
        return (
            <form onSubmit={this.onSubmit}>
                <h3>New Event</h3>
                
                <TextFieldGroup 
                    field="title"
                    label="Event title"
                    value={title}
                    error={errors.title}
                    onChange={this.onChange}
                />
                
                <button type="submit">Submit event</button>
            </form>
        );
    }
    
}

NewEventPage.propTypes = {
    createEvent: React.PropTypes.func.isRequired
};

export default connect(null, { createEvent })(NewEventPage);