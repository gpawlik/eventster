import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import EventPage from './EventPage';
import Preloader from '../../common/Preloader';
import { getEvent } from '../../actions/eventActions';
import store from '../../store';

class EventPageContainer extends React.Component {   
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }       
    
    componentDidMount() {
        this.props.getEvent(this.props.params.eventId).then(res => {
            this.setState({ isLoading: false });
        });
    }

    render() {        
        return (
            <div>
                {this.state.isLoading && <Preloader />}
                <EventPage event={this.props.event} />
            </div>            
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