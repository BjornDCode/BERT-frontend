import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { addFlashMessage } from '../actions/flashMessages';

export default function(ComposedComponent) {
    class Authenticate extends Component {
        constructor(props) {
            super(props);

            this.state = {
                redirectTo: null
            }
        }


        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.addFlashMessage({
                    type: 'error',
                    message: 'Please login to access this page'
                });
                this.setState({ redirectTo: "/signin" });
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.setState({ redirectTo: "/" });
            }
        }

        render() {

            const output = this.state.redirectTo ? <Redirect push={true} to={this.state.redirectTo} /> : <ComposedComponent {...this.props} />;

            return(
                <div>
                    {output}
                </div>
            );
        };
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        addFlashMessage: PropTypes.func.isRequired
    };

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
