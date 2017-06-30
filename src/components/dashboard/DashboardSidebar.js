import React, { Component } from 'react';
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

        return (
            <aside className={sideBarClass}>
                <ul className="card">
                    <li><NavLink exact to="/dashboard" activeClassName="active">Projects</NavLink></li>
                    <li><NavLink to="/dashboard/project" activeClassName="active">Dynamic Project</NavLink></li>
                    <li><NavLink to="/dashboard/page" activeClassName="active">Dynamic Page</NavLink></li>
                    <li><NavLink to="/dashboard/test" activeClassName="active">Dynamic Test</NavLink></li>
                </ul>
                <button className="toggle-nav" onClick={this.onClick} ><img src={arrow} /></button>
            </aside>
        );
    }
}

export default DashboardSidebar;
