import React, { Component } from 'react';

import '../css/Info_copy.css';

import laptop from '../img/laptop.svg';
import recording from '../img/recording.svg';
import headphones from '../img/Headphones.jpg';
import connecting from '../img/connecting.svg';


const isMobile = window.innerWidth <= 600;


class Info extends Component {
    render() {
        return (
            <div className="Info_copy" id="info">
                <div className="Row">
                    <div className="Column2">
                        <img src = {headphones} alt = "headphones" className="icon2"/>
                    </div>
                    <p className="Spacer">
                    </p>
                    <div className="Column2">
                        <p className="title2">
                            Engage
                        </p>
                        <p className="data2">
                            A440 lets audience members discover new artists and engage with the entirety of their favorite
                            musicians content all in one place. Enjoy live streams of concerts, videos and writings of the
                            artist talking about the music that matters, and more all at the tip of your fingers.
                        </p>
                        <a style={{display: "table-cell", textDecoration: "none"}} href="https://danny235320.typeform.com/to/iJ2NhH" target="_blank">
                            <div className = "buttonBeta3" style={{marginTop: 0}} href="https://danny235320.typeform.com/to/iJ2NhH" target="_blank">
                                Join Our Beta
                            </div>
                        </a>
                    </div>
                </div>
                <div className="Rowrev">
                    <div className="Column2">
                        <img src = {headphones} alt = "headphones" className="icon2"/>
                    </div>
                    <p className="Spacer">
                    </p>
                    <div className="Column2">
                        <p className="title2">
                            Create
                        </p>
                        <p className="data2">
                            For the first time, A440 makes it simple and easy for any artist to live stream concerts at a high level.
                            Manage and monetize your entire digital output from one  easy to use platform, all at no cost to you.
                        </p>
                        <a style={{display: "table-cell", textDecoration: "none"}} href="https://danny235320.typeform.com/to/iJ2NhH" target="_blank">
                            <div className = "buttonBeta3" style={{marginTop: 0}} href="https://danny235320.typeform.com/to/iJ2NhH" target="_blank">
                                Join Our Beta
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;
