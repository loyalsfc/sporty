import React from "react";

function Ourservice(props){
    return (
        <div className="service-wrapper">
            <i className={"fa-solid " + props.icon}></i>
            <h4>Live Scores</h4>
            <p>We provide live football matches of all major leagues in the world</p>
        </div>
    )
}

export default Ourservice