import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import InputFieldGroup from '../../common/InputFieldGroup';
import InputSubmitGroup from '../../common/InputSubmitGroup';
import validateInput from '../../../utils/validations/createProject';
import { createProjectRequest } from '../../../actions/projectActions';

class CreateProjectForm extends Component {
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
            this.props.createProjectRequest(this.state).then(
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
                    <InputFieldGroup type="text" label="Project Title" name="title" value={title} placeholder="Title" onChange={this.onChange} errors={errors} />

                    <InputSubmitGroup value="Create Project" isLoading={isLoading} />
                </form>
            </div>
        );
    }
}

CreateProjectForm.propTypes = {
    createProjectRequest: PropTypes.func.isRequired
};

export default connect(null, {createProjectRequest})(CreateProjectForm);
