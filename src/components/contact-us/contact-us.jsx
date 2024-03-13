import React from 'react'
import Header from '../Header'

import facebook from '../../assets/images/contact-socials/facebook.svg'
import youtube from '../../assets/images/contact-socials/youtube.svg'
import twitter from '../../assets/images/contact-socials/twitter.svg'
import instagram from '../../assets/images/contact-socials/instagram.svg'
import AdvertiseCard from '../advertise/advertise-card'
import Footer from '../Footer'

function ContactUs() {
    return (
        <div className='advertise'>
            <Header />
            <div className='advertise-hero-wrapper'>
                <form className='advertise-hero-text'>
                    <h1>Contact Us</h1>
                    <p>For more enquires, please send us an email through the following form.</p>

                    <div className='advertise-form-control'>
                        <label 
                            htmlFor="full_name"
                            className='advertise-contact-label'
                        >
                            Full Name
                        </label>
                        <input 
                            type="text" 
                            id='full_name' 
                            placeholder='e.g John Doe' 
                            className='advertise-contact-input'
                        />
                    </div>
                    <div className='advertise-form-control'>
                        <label 
                            htmlFor="email_address"
                            className='advertise-contact-label'
                        >
                            Email Address
                        </label>
                        <input 
                            type="text" 
                            id='email_address' 
                            placeholder='e.g john_doe@example.com' 
                            className='advertise-contact-input'
                        />
                    </div>
                    <div className='advertise-form-control'>
                        <label
                            htmlFor="message"
                            className='advertise-contact-label'
                        >
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10"
                            className='advertise-contact-text-area'
                        />
                    </div>
                    <button className='partner-with-us'>Send Message</button>
                </form>

                <div className='advertise-sample-wrapper'>
                    <AdvertiseCard
                        img={facebook}
                        title="Facebook"
                        note="231m Followers"
                    />
                    <AdvertiseCard
                        img={instagram}
                        title="Instagram"
                        note="12m Followers"
                    />
                    <AdvertiseCard
                        img={youtube}
                        title="Youtube"
                        note="340k Subscribers"
                    />
                    <AdvertiseCard
                        img={twitter}
                        title="Twitter"
                        note="43M followers"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs