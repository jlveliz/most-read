import React, { Component } from 'react';

export default class PostMostVisitedComponent extends Component {
    state = {
        path : ''
    }

    componentDidMount() {
        this.setState({path: 'https://'+this.props.path })
    }
    render() {
        return (
            <li>
                <div className="post-widget-ranking"><h3>{this.props.num}</h3></div>
                <div className="post-widget-title">
                    <a href={this.state.path} target="_blank">{this.props.title}</a>
                </div>
            </li>
        );
    }

}