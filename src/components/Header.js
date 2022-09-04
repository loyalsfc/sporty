import React from "react";
import Logo from "../assets/images/logo.svg";
import {Link} from "react-router-dom";

function Header(){
    return(
        <header>
            <Link to="/"><img src={Logo} alt="Logo" height={32}/></Link>
            <nav>
                <ul className="navigation-menu">
                    <li className="navigation-item"><Link to="Standing">Standing</Link></li>
                    <li className="navigation-item">About Us</li>
                    <li className="navigation-item">Contact Us</li>
                    <li className="navigation-item"><button className="join-us">Join us</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header