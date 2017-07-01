import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentPage } from '../../../actions/pageActions';
import { setActivePage, setActiveDashboardComponent } from '../../../actions/activePage';
import { isEmpty } from 'lodash';
import NoData from './NoData';
import Loader from '../../common/Loader';


class Page extends Component {

    componentDidMount() {
        const { dispatch, getCurrentPage, page } = this.props;
        dispatch(getCurrentPage(page.id));
    }

    componentDidUpdate() {
        const { dispatch, setActivePage, setActiveDashboardComponent, page } = this.props;
        dispatch(setActivePage("Page"));
        let title = page.id ? page.data.title : "Page";
        dispatch(setActiveDashboardComponent(title));
    }

    render() {

        let testComponents = [];

        if (!isEmpty(this.props.page.data)) {

            if (!isEmpty(this.props.page.data.tests.data)) {
                testComponents = this.props.page.data.tests.data.map(test => {
                    return <div key={test.id}>{test.version}</div>
                });
            }

        }

        return (
            <div className="dashboard-component-container">
                {this.props.page.isLoading ? <Loader /> : (testComponents.length > 0) ? testComponents : <NoData type="pages" /> }
            </div>
        );
    }
}

Page.propTypes = {
    page: PropTypes.object.isRequired,
    getCurrentPage: PropTypes.func.isRequired,
    setActivePage: PropTypes.func.isRequired,
    setActiveDashboardComponent: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        page: state.page,
        getCurrentPage: getCurrentPage,
        setActivePage: setActivePage,
        setActiveDashboardComponent: setActiveDashboardComponent
    }
}

export default connect(mapStateToProps)(Page);
