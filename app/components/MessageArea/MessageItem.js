import React from 'react';

class MessageItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick () {
        this.props.deleteMessage(this.props.message.id)
    }
    render() {
        const { id, text } = this.props.message;
        return (
            <li>{text} <button onClick={this.onClick}>delete</button></li>
        );
    }
}

MessageItem.propTypes = {
    message: React.PropTypes.object.isRequired,
    deleteMessage: React.PropTypes.func.isRequired
}

export default MessageItem;