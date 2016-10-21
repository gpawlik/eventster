import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import * as eventsApi from '../../api/events-api';
import { getEvents } from '../../actions/eventActions';
import store from '../../store';

class EventsContainer extends React.Component {
    
    componentDidMount() {
        this.props.getEvents();
    }

    render() {         
        return (
            <EventsList 
                events={this.props.events}
                addEvent={eventsApi.addEvent}
                editEvent={eventsApi.editEvent}
                deleteEvent={eventsApi.deleteEvent}                
            />
        )
    }        
};

const mapStateToProps = function(store) {
    return {
        events: store.eventsState.events
    };
};

export default connect(mapStateToProps, { getEvents })(EventsContainer);