import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentProject } from '../../../actions/dashboardActions';

class ProjectWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        const id = e.target.dataset.id;
        const { dispatch, setCurrentProject } = this.props;
        dispatch(setCurrentProject(id));
        this.setState({redirect: true});
    }

    render() {

        const { id, title } = this.props;

        return(
            <div className="project">
                {this.state.redirect && <Redirect push={true} to="/dashboard/project" />}
                <Link href="#" to="/dashboard/project" onClick={this.onClick} data-id={id} >
                    <h3>{title}</h3>
                </Link>
            </div>
        );
    }
}

ProjectWidget.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    setCurrentProject: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        setCurrentProject: setCurrentProject
    }
}

export default connect(mapStateToProps)(ProjectWidget);
