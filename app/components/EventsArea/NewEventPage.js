import React from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../../common/TextFieldGroup';
import { createEvent } from '../../actions/eventActions';
import { addFlashMessage } from '../../actions/flash';

class NewEventPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            title: '',
            headline: '',
            description: '',
            eventDate: '',
            errors: {},
            isFormLoading: false
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state)
            .then(() => {
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'Event succesfully created!',
                    category: 'event_created'
                });
                this.context.router.push('/')
            })
            .catch(
                (err) => {this.setState({ errors: err.response.data, isFormLoading: false })}
            );
    }
    
    render () {
        const { title, headline, description, eventDate, errors, isFormLoading } = this.state;
        
        return (
            <div>
                <h3>New Event</h3>
                <form onSubmit={this.onSubmit} className="form-box">                                
                    <div className="content-wrapper">
                        <TextFieldGroup 
                            field="title"
                            label="Event title"
                            value={title}
                            error={errors.title}
                            onChange={this.onChange}
                        />
                        
                        <TextFieldGroup 
                            field="headline"
                            label="Event headline"
                            value={headline}
                            error={errors.headline}
                            onChange={this.onChange}
                        />
                        
                        <TextFieldGroup 
                            field="description"
                            label="Event description"
                            value={description}
                            error={errors.description}
                            onChange={this.onChange}
                        />
                        
                        <TextFieldGroup 
                            field="eventDate"
                            label="Event date"
                            value={eventDate}
                            error={errors.eventDate}
                            onChange={this.onChange}
                        />
                        
                        <button type="submit" className="button-primary">Submit event</button>                
                    </div>
                </form>
            </div>
        );
    }
    
}

NewEventPage.propTypes = {
    createEvent: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
};

NewEventPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(null, { createEvent, addFlashMessage })(NewEventPage);