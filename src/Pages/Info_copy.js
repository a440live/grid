import React, { Component } from 'react';

import '../css/Info_copy.css';

import headphones from '../img/Headphones.jpg';
import cello from '../img/kael-bloom-567372-unsplash.jpg';
import camera from '../img/vanilla-bear-films-1180367-unsplash.jpg';
import place from '../img/avi-richards-183715-unsplash.jpg';

const isMobile = window.innerWidth <= 600;

class Info_copy extends Component {
    render() {
        return (
            <div className="Info_copy" id="info">
                <div className="Row">
                    <div className="photo1">
                        <img src = {headphones} alt = "headphones" className="icon2"/>
                    </div>
                    <p className="Spacer">
                    </p>
                    <div className="Column2">
                        <p className="title3">
                            Connect to music outside the concert hall
                        </p>
                        <p className="data2">
                            A440 lets audience members discover new artists and engage with the entirety of their favorite
                            musicians content all in one place. Enjoy live streams of concerts, videos and writings of the
                            artist talking about the music that matters, and more all at the tip of your fingers.
                        </p>
                        <a style={{display: "table-cell", textDecoration: "none"}} href="/Beta" target="_blank">
                            <div className = "buttonBeta3" style={{marginTop: 0}}>
                                Join Our Beta
                            </div>
                        </a>
                    </div>
                </div>
                <div className="Rowrev">
                    <div className="photo2">
                        <img src = {cello} alt = "headphones" className="icon2"/>
                    </div>
                    <p className="Spacer">
                    </p>
                    <div className="Column2">
                        <p className="title3">
                            Follow your favorite artists and discover new ones
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
                <div className="Row">
                    <div className="photo1">
                        <img src = {camera} alt = "headphones" className="icon2"/>
                    </div>
                    <p className="Spacer">
                    </p>
                    <div className="Column2">
                        <p className="title3">
                            Livestream your performances in High Quality for free
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
                    <div className="photo2">
                        <img src = {place} alt = "headphones" className="icon2"/>
                    </div>
                    <p className="Spacer">
                    </p>
                    <div className="Column2">
                        <p className="title3">
                            Manage all of your output in one place
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

export default Info_copy;
