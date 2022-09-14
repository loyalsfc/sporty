import React from "react";
import {Link} from "react-router-dom"

function Footer(props){
    return (
        <div className="footer-wrapper">
            <ul className='navigation-menu py-1' >
                <li className="navigation-item"><Link to="standing">Standing</Link></li>
                <li className="navigation-item"><Link to="top-scorers">Top Scorers</Link></li>
                <li className="navigation-item">About Us</li>
                <li className="navigation-item">Contact Us</li>
            </ul>
            <div className="social-icons">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div>All right reserve @Sporty</div>
        </div>
    )
}

export default Footer