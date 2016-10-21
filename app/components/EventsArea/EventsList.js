import React from 'react';
import { Link } from 'react-router';

class EventsList extends React.Component {    
    render() {   
        const { events, addEvent, editEvent, deleteEvent } = this.props;              
        return (
            <div className="EventsListArea">
                <h3>Events list</h3>
                <ul className="EventsList">
                    {events.map((event, idx) => {
                        return (
                            <li key={idx}>{event.title} 
                                <button onClick={() => deleteEvent(event._id) }>delete</button>
                                <button onClick={() => editEvent(event) }>edit</button>
                                <Link to={'/event/' + event._id}>Show event!</Link>
                            </li>
                        );
                    })}
                </ul>
                <button onClick={addEvent}>Add new event</button>
            </div>
        )
    }
};

export default EventsList;