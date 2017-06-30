import React, { Component } from 'react';

export default function(ComposedComponent) {

    class DashboardComponent extends Component {

        render() {
            return (
                <section className="DashboardComponent">
                    <header>
                        <h2>DashboardComponent</h2>
                    </header>
                    <ComposedComponent />
                </section>
            );
        }
    }

    return DashboardComponent;

}
