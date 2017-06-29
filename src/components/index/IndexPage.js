import React, { Component } from 'react';
import RouteButton from '../common/RouteButton';

class IndexPage extends Component {

    render() {
        return(
            <div className="index-page">
                <div className="intro">
                    <h1>Easily generate Bipolar Emotional Response Tests (BERTs) with this tool!</h1>
                </div>
                <div className="cta">
                    <RouteButton size="big" color="brand" redirectTo="/signup" text="Sign Up" />
                    <RouteButton size="big" color="white" redirectTo="/signin" text="Sign In" />
                </div>
            </div>
        );
    }
}
 export default IndexPage
