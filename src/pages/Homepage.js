import React, { useEffect } from "react";
import LeaguesIcon from "../components/LeaguesIcon";
import Aos from "aos";
import "aos/dist/aos.css";
import Ourservice from "../components/Ourservice";
import Testimonials from "../components/Testimonials";

export default function Homepage(){
    useEffect(()=>{
        Aos.init({ duration: 1000, once: true });
    })
    return (
        <main>
            <section className="banner">
                <h1 data-aos="fade-right" className="banner-title">Welcome to Sporty</h1>
                <h2 
                    data-aos="fade-right" 
                    className="banner-tagline"
                    data-aos-delay="100"
                >
                    Accurate and Timely <span>Football News</span> for you
                </h2>
                <p data-aos="fade-left" className="banner-text" data-aos-delay="200">Football is the world's most popular ball game in numbers of participants and spectators. It is the most interesting and engaging as well as one of the oldest games in the world. At Sporty, we bring to you accurate and timely updates on football leagues, tournaments and teams.</p>
                <button data-aos="fade-left" className="get-started">Get Started</button>
            </section>
            <LeaguesIcon />
            <section className="our-service">
                <h3 data-aos="slide-up" className="section-title">Our Service</h3>
                <div className="services-container">
                    <Ourservice 
                        icon="fa-futbol" 
                        title="Live Score" 
                        content="We provide live football matches of all major leagues in the world"
                    />
                    <Ourservice 
                        icon="fa-bullseye" 
                        title="Player Stats" 
                        content="Get access to players statistics which includes, goal scored, assist, rating etc."
                    />
                    <Ourservice 
                        icon="fa-square-rss" 
                        title="Football News" 
                        content="Timely and confirmed football news across competitions and leagues."
                    />
                    <Ourservice 
                        icon="fa-arrow-up-right-dots" 
                        title="Standings" 
                        content="We provide leagues standing across Europe top five leagues and beyonds"
                    />
                </div>
            </section>
            <section className="testimonials">
                <h3 data-aos="slide-up" className="section-title">Testimonials</h3>
                <Testimonials />
            </section>
        </main>
    )
}