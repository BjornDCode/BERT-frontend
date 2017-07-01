import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

class Widget extends Component {
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
        const { dispatch, setActiveItem } = this.props;
        dispatch(setActiveItem(id));
        this.setState({redirect: true});
    }

    render() {

        const { id, title, redirect } = this.props;

        return(
            <div className="widget">
                {this.state.redirect && <Redirect push={true} to={redirect} />}
                <Link to={redirect} onClick={this.onClick} data-id={id} >
                    <h3>{title}</h3>
                </Link>
            </div>
        );
    }
}

Widget.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    setActiveItem: PropTypes.func.isRequired,
    redirect: PropTypes.string.isRequired
};

export default Widget;
