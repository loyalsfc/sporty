import React from "react";
import Logo from "../assets/images/logo.svg";
import {Link} from "react-router-dom";

function Header(){
    function handleClick(){
        document.querySelector('.mobile-menu').classList.toggle('p-left');
    }

    function showModal(){
        // document.query
    }

    return(
        <header className="bg-primary py-1">
            <div className="mobile-menu bg-primary">
                <i className="fa-solid fa-xmark" onClick={handleClick}></i>
                <Links clickHandler={handleClick}  />
            </div>
                <Modal />
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

function Links({classprop,clickHandler,modalClick}){
    return (
        <ul className={'navigation-menu ' + classprop} >
            <li className="navigation-item" onClick={clickHandler}><Link to="standing">Standing</Link></li>
            <li className="navigation-item" onClick={clickHandler}><Link to="top-scorers">Top Scorers</Link></li>
            <li className="navigation-item" onClick={clickHandler}>About Us</li>
            <li className="navigation-item" onClick={clickHandler}>Contact Us</li>
            <li className="navigation-item newsletter" onClick={clickHandler}>
                <button className="join-us" onClick={modalClick}>Newsletter</button>
            </li>
        </ul>
    )
}

function Modal(){
    return(
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close"><i className="fa-solid fa-circle-xmark"></i></span>
                <p className="bell-icon"><i className="fa-solid fa-bell"></i></p>
                <h3>Subscribe For Newsletter</h3>
                <p>Stay up to date and join our newsletter to receive the latest updates</p>
                <div className="input-wrapper">
                    <i class="fa-solid fa-envelope"></i>
                    <input type='email' />
                </div>
                <button className="subscribe-button">Subscribe</button>
            </div>
        </div>
    )
}

export default Header