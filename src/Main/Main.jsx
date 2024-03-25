import React from 'react';
import './Main.scss'

export default function Main() {
    return (
        <div className="main-holder">
            <h2 className="text-tag">Don't Mask Your Chronic Conditions. Treat the Cause.</h2>
            <div className="paragraph-holder">
                <p className="chronic-paragraph">
                The doctors at Personalized Wellness Clinic dig deep to discover why you feel the way you do.
                </p>
                <p className="chronic-paragraph">
                Call us to schedule an appointment if you suffer from any of the following chronic conditions and you want to address the underlying issues.
                </p>
            </div>
            <div className="list-holder">
                <ul>
                    <li className="list-item">
                        Lack of energy
                    </li>
                    <li className="list-item">
                        Difficulty getting to sleep or staying asleep
                    </li>
                    <li className="list-item">
                        Reduced mental focus and memory (sometimes known as "brain fog")
                    </li>
                    <li className="list-item">
                        Irritability or mood swings
                    </li>
                    <li className="list-item">
                        Hot flashes or night sweats
                    </li>
                    <li className="list-item">
                        Inability to lose weight even though you have a healthy diet and exercising
                    </li>
                    <li className="list-item">
                        Decreased sexual desire and performance
                    </li>
                </ul>
            </div>
            <h2 className="text-tag">Your health. Your Way</h2>
            <div className="healthHolder">
                <p className="chronic-paragraph">
                Your care begins with an extended consultation with Dr. Bonner, during which samples will be taken for lab work, and you will discuss your medical history, symptoms, goals, and expectations.  Dr. Bonner will then recommend which Personalized Wellness program best suits your needs:
                </p>
            </div>
            <div className="informationHolderHormone">
                <h1 className="informationTitle">
                    Hormone Balance
                </h1>
                <p>
                For those whose symptoms are primarily due to unbalanced or suboptimal hormone levels but who otherwise are happy with their health and wellness.
                </p>
                <button>
                    Learn More about The Hormone Balance Program
                </button>
            </div>
            <div className="informationHolderMetabolic">
                <h1 className="informationTitle">
                    Metabolic Reset
                </h1>
                <p>
                For those looking for a comprehensive wellness solution that includes hormone balancing, diet and lifestyle changes, pharmaceutical grade supplementation and genetic testing.
                </p>
                <button>
                    Learn More about The Metabolic Reset Program
                </button>
            </div>
            <button>
                Take your first step to Feeling Well Again
            </button>
        </div>
    )
}