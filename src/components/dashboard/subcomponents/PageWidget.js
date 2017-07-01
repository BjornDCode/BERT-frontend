import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setCurrentPage } from '../../../actions/pageActions';

class PageWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

    }

    onClick(id) {
        const { dispatch, setCurrentPage } = this.props;
        dispatch(setCurrentPage(id));
    }

    render() {

        const { id, title } = this.props;

        return (
            <div className="page">
                {this.state.redirect && <Redirect push={true} to="/dashboard/page" />}
                <Link href="#" to="/dashboard/page" onClick={() => this.onClick(id)} data-id={id}>
                    <h3>{title}</h3>
                </Link>
            </div>
        );
    }
}

PageWidget.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    setCurrentPage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        setCurrentPage: setCurrentPage
    }
}

export default connect(mapStateToProps)(PageWidget);
