import React from 'react';
import './Bottom.scss'

export default function Bottom() {
    return (
        <div className="footer" id="holder">
            <div className="inner">
                <div className="logo-container">
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
            </div>
        </div>
    )
}