import React from 'react';
import moment from 'moment';

class EventPage extends React.Component {    
    render () {
        const { title, headline, description, eventDate, createdAt } = this.props.event;
        const eventDateFormatted = moment(eventDate).format('DD/MM/YYYY'); 
        const timeCreated = moment(createdAt).fromNow();        
        return (
            <div className="EventProfile">
                <h3>Event Profile</h3>
                <p>Title: {title}</p>
                <p>Headline: {headline}</p>
                <p>Description: {description}</p>
                <p>Event date: {eventDateFormatted}</p>
                <p>Created: {timeCreated}</p>
            </div>
        )        
    }
};

EventPage.propTypes = {
    event: React.PropTypes.object.isRequired
}

export default EventPage;