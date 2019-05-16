import React, { Component } from 'react';

import '../css/Story.css';

import headphones from '../img/Headphones.jpg';
import cello from '../img/kael-bloom-567372-unsplash.jpg';
import camera from '../img/vanilla-bear-films-1180367-unsplash.jpg';
import place from '../img/avi-richards-183715-unsplash.jpg';

const isMobile = window.innerWidth <= 600;

class Info extends Component {
    render() {
        return (
            <div className="Story">
                <div className="Column3">
                    <p className="title4">
                        Our Story:
                    </p>
                    <p className="Spacer">
                    </p>
                    <p className="data3">
                        How we're using technology to revolutionize classical music listening in the 21st century.
                    </p>
                    <p className="Spacer">
                    </p>
                    <a style={{display: "table-cell", textDecoration: "none"}} href="https://danny235320.typeform.com/to/iJ2NhH" target="_blank">
                        <div className = "buttonMedium" style={{marginTop: 0}} href="https://danny235320.typeform.com/to/iJ2NhH" target="_blank">
                            Read Here
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Info;
