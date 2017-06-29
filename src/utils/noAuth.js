import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default function(ComposedComponent) {

    class NoAuthenticate extends Component {
        constructor(props) {
            super(props);

            this.state = {
                redirectTo: null
            }
        }

        componentWillMount() {
            if (this.props.isAuthenticated) {
                this.setState({ redirectTo: "/dashboard" });
            }
        }

        render() {

            const output = this.state.redirectTo ? <Redirect push={true} to={this.state.redirectTo} /> : <ComposedComponent {...this.props} /> ;

            return(
                <div>
                    {output}
                </div>
            );
        }

    }

    NoAuthenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired
    };

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps)(NoAuthenticate);

}
