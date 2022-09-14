import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import {Link} from "react-router-dom";

function Header(){
    function handleClick(){
        document.querySelector('.mobile-menu').classList.toggle('p-left');
    }

    window.onclick = function(event) {
        if (event.target == document.querySelector('#newsletter-modal')) {
          showModal();
        }
    }

    function showModal(){
        document.querySelector('#newsletter-modal').classList.toggle('active-modal')
    }

    return(
        <header className="bg-primary py-1">
            <div className="mobile-menu bg-primary">
                <i className="fa-solid fa-xmark" onClick={handleClick}></i>
                <Links clickHandler={handleClick} modalClick={showModal} />
            </div>
                <Modal modalClick={showModal}/>
            <div className="container mx-auto">
                <nav>
                    <Link to="/"><img src={Logo} alt="Logo" height={32} /></Link>
                    <Links classprop="d-md"  modalClick={showModal}/>
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

function Modal({modalClick}){
    const [subscribed, setSubscribed] = useState(false);
    function handleClick(){
        setSubscribed(true)
    }
    return(
        <div id="newsletter-modal" className="modal">
            <div className="modal-content show">
                <span className="close" onClick={modalClick}><i className="fa-solid fa-circle-xmark"></i></span>
                {!subscribed ?
                <>    
                    <p className="bell-icon"><i className="fa-solid fa-bell"></i></p>
                    <h3 className="subscribe-header">Subscribe For Newsletter</h3>
                    <p className="subscribe-content">Stay up to date and join our newsletter to receive the latest updates</p>
                    <div className="input-wrapper">
                        <i className="fa-solid fa-envelope"></i>
                        <input type='email' className="newsletter-email" />
                    </div>
                    <button className="subscribe-button" onClick={handleClick}>Subscribe</button>
                </> :
                <>
                    <p className="bell-icon"><i className="fa-solid fa-check"></i></p>
                    <h3 className="subscribe-header">THANKS FOR SUBSCRIBING</h3>
                    <p className="subscribe-content">Now we just need to confirm your email address - please click the link in the email we went you.</p>
                    <button className="subscribe-button" onClick={modalClick}>Back to Sporty</button>
                </>
            }
            </div>
        </div>
    )
}

export default Header