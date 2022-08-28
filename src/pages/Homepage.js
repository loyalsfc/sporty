import React, { useEffect } from "react";
import LeaguesIcon from "../components/LeaguesIcon";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Homepage(){
    useEffect(()=>{
        Aos.init({ duration: 1000 });
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
            </section>
            <LeaguesIcon />
        </main>
    )
}