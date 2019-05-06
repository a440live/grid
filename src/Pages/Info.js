import React, { Component } from 'react';

import '../css/Info.css';

import laptop from '../img/laptop.svg';
import recording from '../img/recording.svg';
import connecting from '../img/connecting.svg';


const isMobile = window.innerWidth <= 600;


class Info extends Component {
    render() {
        return (
            <div className="Info" id="info">
                <div className="Column" style={{marginLeft:"3vw"}}>
                    <p className="title">
                        Engage
                    </p>
                    <img src = {laptop} alt = "laptop" className="icon"/>
                    <p className="h1">
                        Connect with your Favorite Artists
                    </p>
                    <p className="data">
                        A440 lets audience members discover new artists and engage with the entirety of their favorite
                        musicians content all in one place. Enjoy live streams of concerts, videos and writings of the
                        artist talking about the music that matters, and more all at the tip of your fingers.
                    </p>
                </div>
                <div className="Column">
                    <img src = {connecting} alt = "connecting" className="connectingIcon"/>
                    <a style={{display: "table-cell", textDecoration: "none"}} href="https://danny235320.typeform.com/to/iJ2NhH" target="_blank">
                        <div className="mobile">
                            <div className = "buttonBeta2" style={{marginTop: "15vh"}}>
                                Join Our Beta
                            </div>
                        </div>
                    </a>
                </div>
                <div className="Column" style={{marginRight:"3vw"}}>
                    <p className="title">
                        Create
                    </p>
                    <img src = {recording} alt = "laptop" className="icon"/>
                    <p className="h1">
                        Build Your Community
                    </p>
                    <p className="data">
                        For the first time, A440 makes it simple and easy for any artist to live stream concerts at a high level.
                        Manage and monetize your entire digital output from one  easy to use platform, all at no cost to you.
                    </p>
                </div>
            </div>
        );
    }
}

export default Info;
