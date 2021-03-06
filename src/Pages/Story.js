import React, { Component } from 'react';

import '../css/Story.css';

import headphones from '../img/Headphones.jpg';
import cello from '../img/kael-bloom-567372-unsplash.jpg';
import camera from '../img/vanilla-bear-films-1180367-unsplash.jpg';
import place from '../img/avi-richards-183715-unsplash.jpg';
import {Event} from "./Home";

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
                    <a style={{display: "table-cell", textDecoration: "none"}} href="https://medium.com/@andrew_white/a440-611cecba8aac" target="_blank"
                       onClick={() => {
                           Event("STORY", "Clicked to Medium post", "STORY_PAGE")
                       }}>
                        <div className = "buttonMedium" style={{marginTop: 0}} href="https://medium.com/@andrew_white/a440-611cecba8aac" target="_blank">
                            Read Here
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Info;
