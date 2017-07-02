import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentProject } from '../../../actions/projectActions';

class ProjectWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

    }

    onClick(id) {
        const { dispatch, setCurrentProject } = this.props;
        dispatch(setCurrentProject(id));
        this.setState({redirect: true});
    }

    render() {

        const { id, title } = this.props;

        return(
            <div className="widget">
                {this.state.redirect && <Redirect push={true} to="/dashboard/project" />}
                <Link href="#" to="/dashboard/project" onClick={() => this.onClick(id)} >
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
        setCurrentProject
    }
}

export default connect(mapStateToProps)(ProjectWidget);
