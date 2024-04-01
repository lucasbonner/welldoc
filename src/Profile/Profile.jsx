import React from 'react';
import './Profile.scss';

export default function Profile() {
    return (
        <div className="profileHolder">
            <h2 className="profileHeadline">Dr.Donald Bonner, "The Well Doc"</h2>
            <p className="bio">
            Following a successful career in conventional medicine and many years of advanced training in functional medicine, Dr. Bonner has opened Personalized Wellness functional medicine clinic serving the Jackson, Mississippi metro area.
            </p>
            <p className="quote">
                "My ultimate goal is for you to achieve long-term personalized wellness and maintain vibrant self care through a healthy lifestyle, ongoing education and a solid understanding of your own personal physiology and genetics."
            </p>
            <div className="accreditationsHolder">
                <img src="logos/drbonnerfooter500x.jpg" /> 
                <ul className="profileList">
                    <li>
                        Donald Bonner, D.O., "The Well Doc"
                    </li>
                    <li>
                        Doctor of Osteopathy
                    </li>
                    <li>
                        Certified Anesthesiologist
                    </li>
                    <li>
                        Certified Functional Medicine Practitioner
                    </li>
                    <li>
                        Personalized Wellness Founder & CEO
                    </li>
                </ul>
                <button className="profileButton">
                    More about Dr.Bonner
                </button>
            </div>
        </div>
    )
}