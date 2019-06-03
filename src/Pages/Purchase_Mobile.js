import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import '../css/Purchase.css';
import logo from "../img/logo_white2.svg";
import ScrollIntoView from "react-scroll-into-view";
import mockups from "../img/mockups.png";
import { PayPalButton } from "react-paypal-button-v2";

const isMobile = window.innerWidth <= 600;

class Purchase_Mobile extends Component {
    render() {
        return (
            <div className="Home2">
                <div className="wrapBackButton">
                    <Link to={'/#options_section'} style={{ textDecoration: 'none' }}>
                        <div className = "buttonBack">
                            Back
                        </div>
                    </Link>
                </div>
                <div className="purchase">
                    <div className = "caption_purchase">
                        <p className='purchase_text'>
                            We’re thrilled for you to join us on this journey!
                        </p>
                    </div>
                    <div className = "info_caption">
                        <p>
                            Click the button below to securely purchase a 1 year subscription to the artist or organization of your choice with exclusive pre-order perks for only $15.
                        </p>
                    </div>
                </div>
                <div className="bottom_half">
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
                <div className="paypal">
                    <PayPalButton
                        amount="0.01"
                        onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);

                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                    orderID: data.orderID
                                }),
                                headers: {
                                    'Content-Type': 'application/json',
                                    // 'Content-Type': 'application/x-www-form-urlencoded',
                                }
                            });
                        }}
                        options={{
                            clientId: "AVRrieiy9ScdRYdtuhm9Tjq7-n89rlTKbF9igSnwLIa43hWPY20OAyZ5iLlhy5o4EiVdSG3RIquKlBsA"
                        }}
                        onError={(err)=>{console.log(err)}}
                    />
                </div>
            </div>

        );
    }
}

export default Purchase_Mobile;