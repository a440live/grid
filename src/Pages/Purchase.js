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
                    <div className = "caption">
                        <p>
                            We’re thrilled for you to join us on this journey!
                        </p>
                    </div>
                    <div className = "info">
                        <p>
                            Click the button below to securely purchase a 1 year subscription to the artist or organization of your choice for only $10.
                        </p>
                    </div>
                </div>
                <div className="snip1214">
                    <div className="plan">
                        <h3 className="plan-title">
                            Bronze
                        </h3>
                        <div className="plan-cost"><span className="plan-price">$1.99</span>
                        </div>
                        <ul className="plan-features">
                            <li><i className="ion-checkmark"> </i>1 FREE Subscription</li>
                            <li><i className="ion-checkmark"> </i>Access to public livestreams</li>
                            <li><i className="ion-checkmark"> </i>Access to A440 extra content</li>
                            <li><i className="empty"> </i></li>
                        </ul>
                        <div className="plan-select"><a href="">Select</a></div>
                    </div>
                    <div className="plan featured">
                        <h3 className="plan-title">
                            Gold
                        </h3>
                        <div className="plan-cost"><span className="plan-price">$12.99</span>
                        </div>
                        <ul className="plan-features">
                            <li><i className="ion-checkmark"> </i>10 FREE Subscriptions</li>
                            <li><i className="ion-checkmark"> </i>Access to any livestreams and videos</li>
                            <li><i className="ion-checkmark"> </i>Access to A440 extra content</li>
                            <li><i className="ion-checkmark"> </i>Exclusive access to artists extra content</li>
                        </ul>
                        <div className="plan-select"><a href="">Select</a></div>
                    </div>
                    <div className="plan">
                        <h3 className="plan-title">
                            Silver
                        </h3>
                        <div className="plan-cost"><span className="plan-price">$7.99</span>
                        </div>
                        <ul className="plan-features">
                            <li><i className="ion-checkmark"> </i>5 FREE Subscriptions</li>
                            <li><i className="ion-checkmark"> </i>Access to any livestreams and videos</li>
                            <li><i className="ion-checkmark"> </i>Access to A440 extra contents</li>
                            <li><i className="ion-checkmark"> </i>Exclusive access to artists extra content</li>
                        </ul>
                        <div className="plan-select"><a href="">Select</a></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Purchase;
