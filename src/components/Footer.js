import React from "react";
import {Link} from "react-router-dom"
import Logo from "../assets/images/logo.svg";
import twitter from "../assets/images/socials/twitter.png";
import facebook from "../assets/images/socials/facebook.png";
import youtube from "../assets/images/socials/youtube.png";
import instagram from "../assets/images/socials/instagram.png";
import apple from "../assets/images/socials/apple.png";
import google from "../assets/images/socials/google-play.png";


function Footer(props){
    return (
        <footer className="">
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
                    <ul>
                        <li className="footer-social-card mb-2">
                            <img src={apple} height={16} width={16} />
                            Download for iPhone
                        </li>
                        <li className="footer-social-card mb-2">
                            <img src={google} height={16} width={16} />
                            Download for android
                        </li>
                    </ul>
                </div>
            </div>


            {/* <ul className='navigation-menu py-1' >
                <li className="navigation-item"><Link to="standing">Standing</Link></li>
                <li className="navigation-item"><Link to="top-scorers">Top Scorers</Link></li>
                <li className="navigation-item">About Us</li>
                <li className="navigation-item">Contact Us</li>
            </ul>
            <div className="social-icons">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
            </div> */}
            <div className="copyright">Copyright © 2024 Sporty.com | 18+ Gamble responsibly</div>
        </footer>
    )
}

export default Footer