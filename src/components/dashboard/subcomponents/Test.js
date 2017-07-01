import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentTest } from '../../../actions/testActions';
import { setActivePage, setActiveDashboardComponent } from '../../../actions/activePage';
import { isEmpty } from 'lodash';
import NoData from './NoData';
import Loader from '../../common/Loader';

class Test extends Component {

    componentDidMount() {
        const { dispatch, getCurrentTest, test } = this.props;
        dispatch(getCurrentTest(test.id));
    }

    componentDidUpdate() {
        const { dispatch, setActivePage, setActiveDashboardComponent, test } = this.props;
        dispatch(setActivePage("Test"));
        let version = test.id ? ( (test.data.page) ? test.data.version + " - " + test.data.page.title : test.data.version ) : "Test";
        dispatch(setActiveDashboardComponent(version));
    }

    render() {

        let comparisons = [];

        let responses = 0;

        if (!isEmpty(this.props.test.data)) {

            if (!isEmpty(this.props.test.data.comparisons.data)) {
                comparisons = this.props.test.data.comparisons.data.map(comparison => {
                    return <div key={comparison.id}>{comparison.from} to {comparison.to}</div>
                });
            }

            if (!isEmpty(this.props.test.data.responses.data)) {
                this.props.test.data.responses.data.forEach(() => {
                    return responses++;
                })
            }

        }

        return (
            <div className="dashboard-component-container">
            <div className="responses">Responses: {responses}</div>
                {this.props.test.isLoading ? <Loader /> : (comparisons.length > 0) ? comparisons : <NoData type="comparisons" /> }
            </div>
        );
    }
}

Test.propTypes = {
    test: PropTypes.object.isRequired,
    getCurrentTest: PropTypes.func.isRequired,
    setActivePage: PropTypes.func.isRequired,
    setActiveDashboardComponent: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        test: state.test,
        getCurrentTest,
        setActivePage,
        setActiveDashboardComponent
    }
}

export default connect(mapStateToProps)(Test);
