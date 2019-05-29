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
                            Connect with artists outside the concert hall
                        </p>
                        <p className="data2">
                            A440 lets audience members engage with the entirety of their favorite musicians’ content all in one place. Enjoy not only livestreamed concerts, but also videos and writings about the music that matters and sneak peeks behind the curtain - all at the tip of your fingers.
                        </p>
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
                            Discover new artists and follow your favorites from anywhere in the world
                        </p>
                        <p className="data2">
                            For the first time ever, A440 makes it possible for your to discover and meaningfully engage with organizations and artists from across the nation and world, no matter where you are. Whether you want to explore ensembles in other cities, or connect better with your own city, A440 will empower you to discover amazing new musicians and follow their work regardless of where you live.
                        </p>
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
                            Employ our high quality technical capabilities for all of a musician’s online needs.
                        </p>
                        <p className="data2">
                            From livestreams, to HD videos, to blogs, podcasts, and more, you’ll be able to host the entirety of your digital content and explore new ways to interact and engage with your audience. Never feel constrained in your choice of medium again.
                        </p>
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
                            Engage with your audience in the right environment.
                        </p>
                        <p className="data2">
                            A440 is a space that prioritizes long-form art and the artists who produce it. Audiences who engage with you on A440 aren’t going to scroll past your concert in their newsfeed or just look for the definitive recording of a masterwork. They’re here because you make this music special. We get that. That’s why we’re creating an environment that prioritizes you, the artist.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info_copy;
