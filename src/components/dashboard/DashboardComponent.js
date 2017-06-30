import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                    { this.state.redirectTo && <Redirect push={true} to={this.state.redirectTo} />}
                    <header>
                        <h2>{this.props.activePage.component}</h2>
                    </header>
                    <ComposedComponent />
                </section>
            );
        }
    }

    DashboardComponent.propTypes = {
        project: PropTypes.object.isRequired,
        activePage: PropTypes.object.isRequired
    };

    function mapStateToProps(state) {
        return {
            project: state.project,
            activePage: state.activePage
        }
    }

    return connect(mapStateToProps)(DashboardComponent);

}
