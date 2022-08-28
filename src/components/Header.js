import React from "react";
import Logo from "../assets/images/logo.svg"

function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo" height={20}/>
            <nav>
                <ul className="navigation-menu">
                    <li className="navigation-item">About Us</li>
                    <li className="navigation-item">Contact Us</li>
                    <li className="navigation-item"><button className="join-us">Join us</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header