import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlashMessage extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.deleteFlashMessage(this.props.message.id);
    }

    render() {

        const { text, type } = this.props.message;

        return(
            <div className={(type == "success") ? "flash-message success" : "flash-message error"}>
                {text}
                <button onClick={this.onClick} className="close-message"><span>&times;</span></button>
            </div>
        );
    }
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
