import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function(ComposedComponent) {

    class DashboardComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                redirectTo: null
            }
        }

        componentWillMount() {
            if (!this.props.project.id && this.props.location.pathname !== '/dashboard') {
                this.setState({ redirectTo: "/dashboard" });
            }
        }

        render() {


            return (
                <section className="dashboard-component card">
                    <header>
                    { this.state.redirectTo && <Redirect push={true} to={this.state.redirectTo} />}
                        <h2>DashboardComponent</h2>
                    </header>
                    <ComposedComponent />
                </section>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            project: state.project
        }
    }

    return connect(mapStateToProps)(DashboardComponent);

}
