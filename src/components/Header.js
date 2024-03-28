import React, { useRef, useState } from "react";
import Logo from "../assets/images/logo.svg";
import {Link} from "react-router-dom";

function Header(){
    const modalContent = useRef(null)
    function handleClick(){
        document.querySelector('.mobile-menu').classList.toggle('p-left');
    }

    function showModal(){
        document.querySelector('#newsletter-modal').classList.toggle('show-modal')
        setTimeout(()=>{
            modalContent.current.classList.toggle("active-modal")
        }, 1)
    }

    return(
        <header className="bg-primary py-1">
            <div className="mobile-menu bg-primary">
                <i className="fa-solid fa-xmark" onClick={handleClick}></i>
                <Links clickHandler={handleClick} modalClick={showModal} />
            </div>
                <Modal modalClick={showModal} modalContent={modalContent}/>
            <div className="mx-auto header-wrapper">
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
            <li 
                onClick={clickHandler} 
                className="navigation-item"
            >
                <Link to="/">Scores</Link>
            </li>
            <li 
                onClick={clickHandler} 
                className="navigation-item"
            >
                <Link to="/advertise">Advertise</Link>
            </li>
            <li 
                className="navigation-item" 
                onClick={clickHandler}
            >
                <Link to="/mobile-app">Mobile App</Link>
            </li>
            <li 
                className="navigation-item" 
                onClick={clickHandler}
            >
                <Link to="/contact-us">Contact Us</Link>
            </li>
            <li 
                className="navigation-item" 
                onClick={clickHandler}
            >
                <Link to="/about-us">About Us</Link>
            </li>
            <li 
                className="navigation-item" 
                onClick={clickHandler}
            >
                <Link to={""}>Blog</Link>
            </li>
            {/* <li className="navigation-item newsletter" onClick={clickHandler}>
                <button className="join-us" onClick={modalClick}>Newsletter</button>
            </li> */}
        </ul>
    )
}

function Modal({modalClick, modalContent}){
    const [subscribed, setSubscribed] = useState(false);

    function handleSubmit(e){
        e.preventDefault()
        setSubscribed(true)
    }

    function goBack(){
        modalClick()
        setSubscribed(false)
    }

    return(
        <div id="newsletter-modal" className="modal">
            <div className="modal-background" onClick={goBack}/>
            <div ref={modalContent} className="modal-content show">
                <span className="close" onClick={goBack}><i className="fa-solid fa-circle-xmark"></i></span>
                {!subscribed ?
                <form onSubmit={handleSubmit}>    
                    <p className="bell-icon"><i className="fa-solid fa-bell"></i></p>
                    <h3 className="subscribe-header">Subscribe For Newsletter</h3>
                    <p className="subscribe-content">Stay up to date and join our newsletter to receive the latest updates</p>
                    <div className="input-wrapper">
                        <i className="fa-solid fa-envelope"></i>
                        <input type='email' className="newsletter-email" />
                    </div>
                    <button className="subscribe-button">Subscribe</button>
                </form> :
                <>
                    <p className="bell-icon"><i className="fa-solid fa-check"></i></p>
                    <h3 className="subscribe-header">THANKS FOR SUBSCRIBING</h3>
                    <p className="subscribe-content">Now we just need to confirm your email address - please click the link in the email we went you.</p>
                    <button className="subscribe-button" onClick={goBack}>Back to Sporty</button>
                </>
            }
            </div>
        </div>
    )
}

export default Header