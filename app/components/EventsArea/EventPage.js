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
                <div className="profile-image"></div>
                <div className="content-wrapper">
                    <p>
                        <span className="profile-label">Title</span> 
                        {title}
                    </p>
                    <p>
                        <span className="profile-label">Headline</span> 
                        {headline}
                    </p>
                    <p>
                        <span className="profile-label">Description</span> 
                        {description}
                    </p>
                    <p>
                        <span className="profile-label">Event date</span> 
                        {eventDateFormatted}
                    </p>
                    <p>
                        <span className="profile-label">Created</span> 
                        {timeCreated}
                    </p>
                </div>
            </div>
        )        
    }
};

EventPage.propTypes = {
    event: React.PropTypes.object.isRequired
}

export default EventPage;