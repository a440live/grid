import React, { Component } from 'react';
import { Route } from "react-router-dom";

import '../css/Info_copy.css';
import logo from "../img/logo_white2.svg";
import ScrollIntoView from "react-scroll-into-view";
import mockups from "../img/mockups.png";

const isMobile = window.innerWidth <= 600;

class Purchase extends Component {
    render() {
        return (
            <div className="Home2">
                <div className="purchase">
                    <div className = "caption_purchase">
                        <p>
                            We’re thrilled for you to join us on this journey!
                        </p>
                    </div>
                    <div className = "info_caption">
                        <p>
                            Click the button below to securely purchase a 1 year subscription to the artist or organization of your choice with exclusive pre-order perks for only $15.
                        </p>
                    </div>
                </div>
                <div className="snip1214">
                    <div className="plan featured">
                        <h3 className="plan-title">
                            Pre-Order
                        </h3>
                        <div className="plan-cost"><span className="plan-price">$15.00</span>
                        </div>
                        <ul className="plan-features">
                            <li><i className="ion-checkmark"> </i>12-month artist subscription</li>
                            <li><i className="ion-checkmark"> </i>Access to artists' livestreams and videos</li>
                            <li><i className="ion-checkmark"> </i>Exclusive access to artists' extra content</li>
                            <li><i className="ion-checkmark"> </i>First adopter chat badge</li>
                            <li><i> </i></li>

                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Purchase;
