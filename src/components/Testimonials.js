import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Testimonials(props){
    React.useEffect(()=>{
        Aos.init({ duration: 1000 });
    })

    return (
        <div className="testimonial-container">
            <Testimony />
            <Testimony />
            <Testimony />
        </div>
    )
}

function Testimony(props){
    return (
        <div data-aos="slide-up" data-aos-delay={props.delay} className="testimonial-wrapper">
            <p className="testimonial-content">{props.content}</p>
            <div className="testimonial-image">
                <img src={props.image} height={20} width={20} />
            </div>
        </div>
    )
}

export default Testimonials