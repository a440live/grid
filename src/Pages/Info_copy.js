import React, { Component } from 'react';

import '../css/Info_copy.css';

import laptop from '../img/laptop.svg';
import recording from '../img/recording.svg';
import connecting from '../img/connecting.svg';


const isMobile = window.innerWidth <= 600;


class Info extends Component {
    render() {
        return (
            <div className="Info_copy" id="info">
                <div className="ColumnMain">
                    <div className="Row">
                        <div className="Column">
                            <img src = {laptop} alt = "laptop" className="icon2"/>
                        </div>
                        <p className="Spacer">
                        </p>
                        <div className="Column">
                            <p className="title">
                                Engage
                            </p>
                            <p className="data">
                                A440 lets audience members discover new artists and engage with the entirety of their favorite
                                musicians content all in one place. Enjoy live streams of concerts, videos and writings of the
                                artist talking about the music that matters, and more all at the tip of your fingers.
                            </p>
                        </div>
                    </div>
                    <div className="Rowrev">
                        <div className="Column">
                            <img src = {recording} alt = "laptop" className="icon2"/>
                        </div>
                        <p className="Spacer">
                        </p>
                        <div className="Column">
                            <p className="title">
                                Create
                            </p>
                            <p className="data">
                                For the first time, A440 makes it simple and easy for any artist to live stream concerts at a high level.
                                Manage and monetize your entire digital output from one  easy to use platform, all at no cost to you.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Info;
