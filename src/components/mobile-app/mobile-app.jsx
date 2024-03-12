import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import GooglePlay from "../../assets/images/google-play.png";
import AppleStore from '../../assets/images/apple.png';
import mobileApp from '../../assets/images/mobile-app.png';
import logo from "../../assets/images/favicon.png";
import './mobile-app.css'

function MobileApp() {
    return (
        <div className='advertise'>
            <Header />
                <main className='advertise-hero-wrapper'>
                    <article>
                        <h4 className='go-mobile-title'>Go Mobile!</h4>
                        <p className='go-mobile-note'>Introducing our cutting-edge soccer live score app! Stay at the forefront of the game with real-time updates, match highlights, and in-depth statistics—all at your fingertips. Whether you're a die-hard fan or a casual observer, our app delivers the thrill of the game straight to your device. Never miss a goal, assist, or crucial moment again. Download now and elevate your soccer experience!</p>
                        <p className='go-mobile-note'>Catch all the action in real-time, from live scores and updates to personalized news and insights. Never miss a goal, a red card, or any other crucial moment with instant notifications.</p>

                        <div className='go-mobile-storelogo'>
                            <div>
                                <img src={AppleStore} />
                            </div>
                            <div>
                                <img src={GooglePlay} />
                            </div>
                        </div>
                    </article>
                    <div className='mobile-simulator-wrapper'>
                        <div className='mobile-notification-simulator'>
                            <div className='notification-logo-wrapper'>
                                <img    
                                    src={logo}
                                    alt='Logo'
                                    height={20}
                                    width={20}
                                />
                                <span>Sporty</span>
                            </div>
                            <p>
                                FOUL!!!<br />
                                Raheem Sterling issued a red card
                            </p>
                        </div>
                        <div className='mobile-notification-simulator second'>
                            <div className='notification-logo-wrapper'>
                                <img    
                                    src={logo}
                                    alt='Logo'
                                    height={20}
                                    width={20}
                                />
                                <span>Sporty</span>
                            </div>
                            <p>
                                GOOALLLL!!!<br />
                                Garnacho just scored a home goal. 
                            </p>
                        </div>
                        <img src={mobileApp} />
                    </div>
                </main>
            <Footer/>
        </div>
    )
}

export default MobileApp