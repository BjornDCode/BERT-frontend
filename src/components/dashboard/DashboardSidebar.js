import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class DashboardSidebar extends Component {

    render() {
        return (
            <aside className="dashboard-sidebar">
                <ul>
                    <NavLink exact to="/dashboard" activeClassName="active">Projects</NavLink>
                    <NavLink to="/dashboard/project" activeClassName="active">Dynamic Project</NavLink>
                    <NavLink to="/dashboard/page" activeClassName="active">Dynamic Page</NavLink>
                    <NavLink to="/dashboard/test" activeClassName="active">Dynamic Test</NavLink>
                </ul>
            </aside>
        );
    }
}

export default DashboardSidebar;
