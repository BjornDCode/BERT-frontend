import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class DashboardSidebar extends Component {

    render() {
        return (
            <aside className="dashboard-sidebar">
                <ul>
                    <NavLink exact to="/dashboard" activeClassname="active">Projects</NavLink>
                    <NavLink to="/dashboard/project" activeClassname="active">Dynamic Project</NavLink>
                    <NavLink to="/dashboard/page" activeClassname="active">Dynamic Page</NavLink>
                    <NavLink to="/dashboard/test" activeClassname="active">Dynamic Test</NavLink>
                </ul>
            </aside>
        );
    }
}

export default DashboardSidebar;
