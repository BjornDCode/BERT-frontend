import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import InputFieldGroup from '../../common/InputFieldGroup';
import InputSubmitGroup from '../../common/InputSubmitGroup';
import validateInput from '../../../utils/validations/create';
import { createPageRequest } from '../../../actions/pageActions';

class CreatePageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            errors: {},
            isLoading: false,
            redirectTo: null
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors: errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.createPageRequest(this.state, this.props.project.id).then(
                () => this.setState({ redirectTo: "/dashboard" }),
                (error) => this.setState({ errors: error.response.data, isLoading: false })
            );
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        const { title, errors, isLoading, redirectTo } = this.state;

        return (
            <div className="dashboard-component-container">
                {this.state.redirectTo && <Redirect push={true} to={redirectTo} />}
                <form onSubmit={this.onSubmit}>
                    <InputFieldGroup type="text" label="Page Title" name="title" value={title} placeholder="Title" onChange={this.onChange} errors={errors} />

                    <InputSubmitGroup value="Create Page" isLoading={isLoading} />
                </form>
            </div>
        );
    }
}

CreatePageForm.propTypes = {
    createPageRequest: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        project: state.project
    }
}

export default connect(mapStateToProps, {createPageRequest})(CreatePageForm);
