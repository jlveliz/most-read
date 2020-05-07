import React, { Component } from 'react';
import Logo from './../logo.svg';

export default class HeaderComponent extends Component {

    render() {
        return (
            <header id="header-section">
                <div className="logo-content">
                    <img src={Logo} />
                </div>
            </header>
        )
    }

}