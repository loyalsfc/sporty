import React from "react";
import Logo from "../assets/images/logo.svg";
import {Link} from "react-router-dom";

function Header(){
    function handleClick(){
        document.querySelector('.mobile-menu').classList.toggle('p-left');
    }

    return(
        <header className="bg-primary py-1">
            <div className="mobile-menu bg-primary">
                <i className="fa-solid fa-xmark" onClick={handleClick}></i>
                <Links  />
            </div>
            <div className="container mx-auto">
                <nav>
                    <Link to="/"><img src={Logo} alt="Logo" height={32}/></Link>
                    <Links classprop="d-md" />
                    <i className="fa-solid fa-bars d-sm" onClick={handleClick}></i>
                </nav>
            </div>
        </header>
    )
}

function Links({classprop}){
    return (
        <ul className={'navigation-menu ' + classprop} >
            <li className="navigation-item"><Link to="standing">Standing</Link></li>
            <li className="navigation-item"><Link to="top-scorers">Top Scorers</Link></li>
            <li className="navigation-item">About Us</li>
            <li className="navigation-item">Contact Us</li>
            <li className="navigation-item"><button className="join-us">Join us</button></li>
        </ul>
    )
}

export default Header