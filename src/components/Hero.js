import React from 'react'
import { Button } from 'react-bootstrap'
import phoneLogo from '../assets/IcePhone.png'

const Hero = () => {
    return (
        <div className="hero-body">
            <div className="container hero-content">
                <div className="action-display">
                    <div>
                    <div className="text-container">
                        <h3>Connect with your loved ones in Real-time.</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Proin at justo ac magna venenatis cursus.</p>
                        </div>
                        <Button className="main-btn">Get Started</Button>
                </div>
                <div className="bg-logo">
                    <img src={phoneLogo} alt="Phone logo"/>
                </div>
            </div>
        </div>
    )
}
export default Hero
