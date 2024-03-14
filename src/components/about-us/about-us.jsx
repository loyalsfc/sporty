import React from 'react'
import { FaBullseye, FaEye, FaStar } from 'react-icons/fa'
import { IoIosArrowDropdown } from 'react-icons/io'
import Header from '../Header'
import Footer from '../Footer'
import './about-us.css'
import partner5 from  "../../assets/images/partners/partner-5.png"
import partner1 from  "../../assets/images/partners/partner-1.jpg"
import partner2 from  "../../assets/images/partners/partner-2.png"
import partner3 from  "../../assets/images/partners/partner-3.png"
import partner4 from  "../../assets/images/partners/partner-4.jpg"

const testimonials = [
    {
        name: "Obisesan Thomas",
        text: "Sporty is that website that gave me free access to all sport activities around the world."
    },
    {
        name: "Bayonle ",
        text: "I always trust Sporty for accurate sport statistics. They are very reliable and trustworthy."
    },
    {
        name: "Iyiola Barnabas",
        text: "Most of my weekends are spent on Sporty. I browse through various leagues and players statistics."
    }
]

const partners = [
    partner5,
    partner1,
    partner2,
    partner3,
    partner4,
]

function AboutUs() {
    return (
        <main className='advertise'>
            <Header />
            <section className='contact-wrapper'>
                <div className='contact-wrapper-overlay' />
                <div className='mx-auto max-w-xl'>
                    <h2 className='about-us-title'>About Us</h2>
                    <p className='about-us-note'>Navigate effortlessly through fixtures, standings, player statistics, and more, all in one convenient location.</p>

                    <span className='about-us-read-more'>
                        READ MORE
                        <span className='about-us-icon'>
                            <IoIosArrowDropdown size={32} />
                        </span>
                    </span>
                </div>
            </section>
            <section className="container mx-auto about-us-mission-wrapper">
                <h3 className='about-us-mission-title'>Our Mission and Vision</h3>
                <div className='about-us-mission-container'>
                    <div className='about-us-mission-item'>
                        <FaBullseye className='w-fit mx-auto' color='#FFF' size={200} />
                        <h5 className='about-us-mission-item-title'>Our Mission</h5>
                        <p className='font-medium'>Our mission is to provide football enthusiasts with real-time access to comprehensive and accurate live scores, match updates, and insightful analysis.</p>
                    </div>
                    <div className='about-us-mission-item'>
                        <FaEye className='w-fit mx-auto' color='#FFF' size={200} />
                        <h5 className='about-us-mission-item-title'>Our Vision</h5>
                        <p className='font-medium'>Our vision is to become the premier destination for football lovers, delivering unparalleled live scores and match coverage that captivates and engages audiences globally.</p>
                    </div>
                </div>
            </section>
            <section className='about-us-note-section'>
                <div className="contact-wrapper-overlay"/>
                <div className="container mx-auto px-4 md:px-8">
                    <div className="about-us-note-main">
                        <p>At Mavris, fans can stay updated on all the latest match results, live scores, and breaking news from the world of football. Whether you're a die-hard supporter or a casual fan, our platform provides comprehensive coverage of matches across various leagues and tournaments."</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto about-us-partners">
                    <h2 className='about-us-partners-title'>Our Partners</h2>
                    <ul className='about-us-partners-list'>
                        {partners.map((item, index) => {
                            return(
                                <li key={index} className='h-20 sm:h-28 w-20 sm:w-28 rounded-md relative overflow-hidden'>
                                    <img
                                        src={item}
                                        fill
                                        alt='Partner Logo'
                                        className='object-contain'
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            {/* <Testimonials /> */}
            <section className='about-us-testimonial-wrapper'>
                <div className="container mx-auto px-4 md:px-8">
                    <div className='text-center'>
                        <h2 className='about-us-partners-title'>Testimonials</h2>
                        <div className="about-us-testimonial-underline"/>
                        <p className='about-us-testimonial-note'>What our client say about us</p>
                    </div>
                    <ul className='about-us-testimonial-container'>
                        {testimonials.map((item, index) =>{
                            return(
                                <li key={index} className='about-us-testimonial-card'>
                                    <div className='h-full flex flex-col'>
                                        <div className="about-us-testimonial-card-note">
                                            <p>{item.text}</p>

                                            <div className='flex about-us-testimonial-ratings'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>  
                                        <div className='pt-4'>
                                            <h5 className='about-us-testimonial-name'>{item.name}</h5>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default AboutUs