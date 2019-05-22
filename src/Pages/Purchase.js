import React, { Component } from 'react';

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
                            Oops, looks like we aren't ready yet...
                        </p>
                    </div>
                    <div className = "info">
                        <p>
                            But thank you for wanting to be part of our community! Since building a community of
                            classical music fans is one of our driving missions, we will offer you great discounts for
                            when we release:
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
                        <div className="plan-cost"><span className="plan-price">$99</span>
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