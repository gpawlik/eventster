import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import { getEvents, deleteEvent } from '../../actions/eventActions';
import store from '../../store';

class EventsContainer extends React.Component {
    
    componentDidMount() {
        this.props.getEvents();
    }

    render() {         
        return (
            <EventsList 
                events={this.props.events}
                deleteEvent={this.props.deleteEvent}                
            />
        )
    }        
};

EventsContainer.propTypes = {
    events: React.PropTypes.array.isRequired,
    deleteEvent: React.PropTypes.func.isRequired
}

const mapStateToProps = function(store) {
    return {
        events: store.eventsState.events
    };
};

export default connect(mapStateToProps, { getEvents, deleteEvent })(EventsContainer);