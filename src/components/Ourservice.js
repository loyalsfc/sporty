import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Ourservice(props){
    React.useEffect(()=>{
        Aos.init({ duration: 1000 });
    })

    return (
        <div data-aos="slide-up" data-aos-delay="500" className="service-wrapper">
            <div className="round-design"></div>
            <i className={"fa-solid " + props.icon}></i>
            <h4 className="service-title">{props.title}</h4>
            <p className="service-content">{props.content}</p>
        </div>
    )
}

export default Ourservice