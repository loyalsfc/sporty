import React from "react";
import {Link} from "react-router-dom"
import Logo from "../assets/images/logo.svg";
import twitter from "../assets/images/socials/twitter.png";
import facebook from "../assets/images/socials/facebook.png";
import youtube from "../assets/images/socials/youtube.png";
import instagram from "../assets/images/socials/instagram.png";
import apple from "../assets/images/socials/apple.png";
import google from "../assets/images/socials/google-play.png";
import AppleStore from '../assets/images/apple.png';
import GooglePlay from "../assets/images/google-play.png";

function Footer(){
    return (
        <footer className="footer">
            <div className="container mx-auto">
                <div className="footer-wrapper">
                    <Link to="/"><img src={Logo} alt="Logo" height={32} /></Link>
                    <div>
                        <h4 className="footer-title">SPORTY SCORES</h4>
                        <ul>
                            <li className="mb-2">Careers</li>
                            <li className="mb-2">Private Policy</li>
                            <li className="mb-2">Terms of use</li>
                            <li className="mb-2">Cookie Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-title">WE ARE SOCIAL</h4>
                        <ul className="footer-social-card-wrapper">
                            <li className="footer-social-card">
                                <img src={twitter} height={16} width={16} />
                                Twitter
                            </li>
                            <li className="footer-social-card">
                                <img src={instagram} height={16} width={16} />
                                Instagram
                            </li>
                            <li className="footer-social-card">
                                <img src={youtube} height={16} width={16} />
                                Youtube
                            </li>
                            <li className="footer-social-card">
                                <img src={facebook} height={16} width={16} />
                                Facebook
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-title">DOWNLOAD MOBILE APP</h4>
                        <ul className="app-download-wrapper">
                            <li className="">
                                <img src={AppleStore} />
                            </li>
                            <li className="">
                                <img src={GooglePlay}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">Copyright © 2024 Sporty.com | 18+ Gamble responsibly</div>
            </div>
        </footer>
    )
}

export default Footer