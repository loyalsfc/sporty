import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Testimonials(props){
    return (
        <div className="testimonial-container">
            <Testimony 
                content="Sporty is that website that gave me free access to all sport activities around the world." 
                delay = {500}
                image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Testimony 
                content="I always trust Sporty for accurate sport statistics. They are very reliable and trustworthy." 
                delay = {600}
                image="https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Testimony 
                content="Most of my weekends are spent on Sporty. I browse through various leagues and players statistics" 
                delay = {700}
                image='https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
        </div>
    )
}

function Testimony(props){
    return (
        <div data-aos="slide-up" data-aos-delay={props.delay} className="testimonial-wrapper">
            <p className="testimonial-content">{props.content}</p>
            <div className="testimonial-image">
                <img src={props.image} height={48} width={48} />
            </div>
        </div>
    )
}

export default Testimonials