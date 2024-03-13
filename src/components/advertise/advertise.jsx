import React from 'react'
import homepage from '../../assets/images/sporty.png'
import './advertise.css'
import Header from '../Header'

import follow from '../../assets/images/advertise/follow.svg'
import deadline from '../../assets/images/advertise/deadline.svg'
import worldwide from '../../assets/images/advertise/worldwide.svg'
import cloud from '../../assets/images/advertise/cloud.svg'
import eye from '../../assets/images/advertise/eye.svg'
import profit from '../../assets/images/advertise/profit.svg'
import Card from './card'
import Footer from '../Footer'
import AdvertiseCard from './advertise-card'
import wallpaper from "../../assets/images/banners/fullscreen.png"
import top from "../../assets/images/banners/top.png"
import bottom from "../../assets/images/banners/bottom.png"
import side from "../../assets/images/banners/side.png"

function Advertise() {
    return (
        <div className='advertise'>
            <Header />
            <div className='advertise-hero-wrapper'>
                <article className='advertise-hero-text'>
                    <h1>Places Adverts on Sporty Scores</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorem nobis esse cumque, sequi eveniet libero minima, illum optio repellendus id ratione ipsum, numquam maxime fugiat! Inventore consequuntur eius quod.</p>
                    <button className='partner-with-us'>Partner With Us</button>
                </article>

                <div className='advertse-hero-image'>
                    <img 
                        src={homepage}
                    />
                </div>
            </div>

            <ul className='advertise-card-wrapper'>
                <Card
                    img={profit}
                    title="Monthly Visitors"
                    note="786,000 unique visitors as at April 2019."
                />
                <Card
                    img={eye}
                    title="Monthly Page View"
                    note="13M page views per month (February 2024)."
                />
                <Card
                    img={cloud}
                    title="Average User Information"
                    note="100% of Soccer Scores users use the internet every day."
                />
                <Card
                    img={worldwide}
                    title="User Location"
                    note="54.5M of our users are located in USA, Africa and Uk."
                />
                <Card
                    img={deadline}
                    title="Average Time"
                    note="Users spend an average of 1 hour on our website."
                />
                <Card
                    img={follow}
                    title="Social Media Presence"
                    note="3M followers on Instagram, Facebook and Twitter."
                />
            </ul>

            <section className='advertise-form-wrapper'>
                <form action="">
                    <h2>Partner with us</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>

                    <div>
                        <div className='advertise-form-control'>
                            <label 
                                htmlFor="FullName"
                                className='advertise-contact-label'
                            >
                                Full Name
                            </label>
                            <input type="text" 
                                className='advertise-contact-input'
                                placeholder='e.g Aubrey Graham'
                            />
                        </div>
                        <div className='advertise-form-control'>
                            <label 
                                htmlFor="email"
                                className='advertise-contact-label'
                            >
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                className='advertise-contact-input'
                                placeholder='e.g aubrey.g@examplemail.com'
                            />
                        </div>
                        <div className='advertise-form-control'>
                            <label 
                                htmlFor="companyWebsite"
                                className='advertise-contact-label'
                            >
                                Company’s Official Website
                            </label>
                            <input 
                                type="text" 
                                className='advertise-contact-input'
                                placeholder='e.g. bet365online.com'
                            />
                        </div>
                        <div className='advertise-form-control'>
                            <span className='ad-format-title'>Ad format</span>
                            <div className='advertise-ad-formats'>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        id='advertise-wallpaper'
                                    />
                                    <label 
                                        htmlFor="advertise-wallpaper"
                                        className='advertise-contact-checkbox'
                                    >
                                        Wallpaper
                                    </label>
                                </div>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        id='advertise-fullside'
                                    />
                                    <label 
                                        htmlFor="advertise-fullside"
                                        className='advertise-contact-checkbox'
                                    >
                                        Fullside Banner
                                    </label>
                                </div>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        id='advertise-topbanner'
                                    />
                                    <label 
                                        htmlFor="advertise-topbanner"
                                        className='advertise-contact-checkbox'
                                    >
                                        Top Banner
                                    </label>
                                </div>
                                <div>
                                    <input 
                                        type="checkbox" 
                                        id='advertise-bottombanner'
                                    />
                                    <label 
                                        htmlFor="advertise-bottombanner"
                                        className='advertise-contact-checkbox'
                                    >
                                        Bottom Banner
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='advertise-form-control'>
                            <label 
                                htmlFor="avertisemessage"
                                className='advertise-contact-label'
                            >
                                Message
                            </label>
                            <textarea
                                className='advertise-contact-text-area'
                                placeholder='Your Message Goes here'
                            />
                        </div>
                    </div>

                    <button className='advertise-form-submit'>Submit</button>
                </form>

                <div className='advertise-sample'>
                    <div className='advertise-sample-wrapper'>
                        <AdvertiseCard
                            img={wallpaper}
                            title={"Wallpaper"}
                            note={"1440 x 900"}
                        />
                        <AdvertiseCard
                            img={side}
                            title={"Fullside Banner"}
                            note={"300 x 547"}
                        />
                        <AdvertiseCard
                            img={top}
                            title={"Top Banner"}
                            note={"1332 x 80"}
                        />
                        <AdvertiseCard
                            img={bottom}
                            title={"Bottom Banner"}
                            note={"1332 x 80"}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Advertise