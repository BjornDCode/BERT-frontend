import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setCurrentTest } from '../../../actions/testActions';

class TestWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    onClick(id) {
        const { dispatch, setCurrentTest } = this.props;
        dispatch(setCurrentTest(id))
    }

    render() {

        const { id, version, page } = this.props;
        const output = page ? version + " - " + page.title : version;

        return (
            <div className="test">
                {this.state.redirect && <Redirect push={true} to="/dashboard/test" />}
                <Link href="#" to="/dashboard/test" onClick={() => this.onClick(id)}>
                    <h3>{output}</h3>
                </Link>
            </div>
        );
    }
}


TestWidget.propTypes = {
    id: PropTypes.number.isRequired,
    version: PropTypes.number.isRequired,
    setCurrentTest: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        setCurrentTest
    }
}

export default connect(mapStateToProps)(TestWidget);
