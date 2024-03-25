import React from 'react';
import './Splash.scss'

export default function Splash() {
    return (
        <div className="parent">
            <div className="text-holder">
                <h1>Age Healthier. Live Happier</h1>
                <button type="button" className="btn btn-success">Schedule your consultation</button>
            </div>
            <div className="splash-holder">
                <img className="splash" src="logos/splash.jpg" />
            </div>
        </div>
    )
}