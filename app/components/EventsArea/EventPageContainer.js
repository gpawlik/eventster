import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import EventPage from './EventPage';
import { getEvent } from '../../actions/eventActions';
import store from '../../store';

class EventPageContainer extends React.Component {
    
    componentDidMount() {
        this.props.getEvent(this.props.params.eventId);
    }

    render() {         
        return (
            <EventPage event={this.props.event} />
        )
    }        
};

EventPageContainer.propTypes = {
    event: React.PropTypes.object.isRequired,
    getEvent: React.PropTypes.func.isRequired
}

const mapStateToProps = function(store) {
    return {
        event: store.eventState.event
    };
};

export default connect(mapStateToProps, { getEvent })(EventPageContainer);