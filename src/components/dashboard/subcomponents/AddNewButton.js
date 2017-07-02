import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createTestRequest } from '../../../actions/testActions';

class AddNewButton extends Component {

    onClick(e, fromPage) {
        e.preventDefault();
        const { dispatch } = this.props;
        const page_id = fromPage ? this.props.page.id : null;
        dispatch(createTestRequest(this.props.project.id, page_id));
    }

    render() {

        const { location } = this.props;

        let buttonAction;

        if (location.type === 'test') {
            buttonAction = <Link to="#" onClick={(e) => this.onClick(e, location.fromPage)}>Add {location.type}</Link>
        } else {
            buttonAction = <Link to={"/dashboard/" + location.type + "/create"}>Add {location.type}</Link>;
        }

        return (
            <button className="button small brand">
                {buttonAction}
            </button>
        );
    }
}


AddNewButton.propTypes = {
    location: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        project: state.project,
        page: state.page,
        createTestRequest
    }
}

export default connect(mapStateToProps)(AddNewButton);
