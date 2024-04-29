import React from 'react';
import './Footer.scss'

export default function Footer() {
    return (
        <div className="footerHolder navbar-fixed-bottom" id="holder">
            <footer className="inner footer">
                <div className="logoContainer">
                    <img style={{padding: 5}} className="logos" src="logos/fellowship.jpg"/>
                    <img style={{padding: 5}} className="logos" src="logos/anesthesia_logo.png"/>
                    <img style={{padding: 5}} className="logos" src="logos/abaarm.jpg"/>
                </div>
                <div className="textHolder">
                    <p>
                        © 2018 Personalized Wellness.  All Rights Reserved. 120.   
                    </p>
                    <p>
                        Privacy and Site Use Policy.   
                    </p>
                    <p>
                        Website by Q Group Web and MAD Design.   
                    </p>
                </div>
            </footer>
        </div>
    )
}