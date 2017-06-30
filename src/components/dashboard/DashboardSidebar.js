import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/images/arrow.svg';

class DashboardSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navToggle: false
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.setState({ navToggle: !this.state.navToggle });
    }

    render() {

        const sideBarClass = this.state.navToggle ? "dashboard-sidebar visible" : "dashboard-sidebar";

        console.log(this.props.project);
        const { title } = this.props.project.data;

        let pageCount;
        if (this.props.project.data.pages) {
            pageCount = this.props.project.data.pages.data.length;
        }

        let testCount;
        if (this.props.project.data.tests) {
            testCount = this.props.project.data.tests.data.length;
        }

        return (
            <aside className={sideBarClass}>
                <ul className="card">
                    <li><NavLink exact to="/dashboard" activeClassName="active">Projects</NavLink></li>
                    {this.props.project.id && (
                        <div>
                            <li><NavLink to="/dashboard/project" activeClassName="active">{title}</NavLink></li>
                            <li><NavLink to="/dashboard/page" activeClassName="active">Pages ({pageCount})</NavLink></li>
                            <li><NavLink to="/dashboard/test" activeClassName="active">Tests ({testCount})</NavLink></li>
                        </div>
                    )}
                </ul>
                <button className="toggle-nav" onClick={this.onClick} ><img src={arrow} alt="Toggle Navigation" /></button>
            </aside>
        );
    }
}

DashboardSidebar.propTypes = {
    project: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        project: state.project
    }
}

export default connect(mapStateToProps)(DashboardSidebar);
