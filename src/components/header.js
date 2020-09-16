import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-default shadow">
                <a
                    className="col-sm-12 col-md-8 mr-0 headerFont"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Meme Of The Day
            </a>
            </nav>
            </div>
        );
    }
}
