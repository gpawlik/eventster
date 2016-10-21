import React from 'react';

class EventsList extends React.Component {    
    render() {   
        const { events, addEvent, editEvent, deleteEvent } = this.props;              
        return (
            <div className="EventsListArea">
                <h3>Events list</h3>
                <ul className="EventsList">
                    {events.map((event, idx) => {
                        return (
                            <li key={idx}>{event.name} 
                                <button onClick={() => deleteEvent(event._id) }>delete</button>
                                <button onClick={() => editEvent(event) }>edit</button>
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