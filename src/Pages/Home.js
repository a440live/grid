import React, { Component } from 'react';

import '../css/Home.css';
import logo from '../img/logo_white2.svg';
import mockups from '../img/mockups.png';

import ScrollIntoView from 'react-scroll-into-view'

const isMobile = window.innerWidth <= 600;


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="left">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className = "caption">
                        <p>
                            Your Hub for Classical Music
                        </p>
                    </div>
                    <div className = "info">
                        <p>
                            Livestreams, videos, and blogs from all your favorite artists, all in one place.
                        </p>
                    </div>
                    <div className="wrap">
                        <a style={{display: "table-cell", textDecoration: "none"}} href="https://danny235320.typeform.com/to/iJ2NhH" target="_blank">
                            <div className = "buttonBeta">
                                Join Our Beta
                            </div>
                        </a>
                        <ScrollIntoView selector="#info">
                            <div className = "buttonInfo">
                                More Info
                            </div>
                        </ScrollIntoView>
                    </div>

                </div>

                <img src = {mockups} className="mockups" />
            </div>
        );
    }
}

export default Home;
