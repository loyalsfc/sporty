import React from 'react'

function DateCard({day, date, index, active, setDate}){
    const formattedday = date.toLocaleDateString("en-US", {weekday: "long"})
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
    });   
    
    return (
        <li onClick={()=>setDate(date, index)} className={`date-card ${index === active ? "active" : ""}`}>
            <span>{day === "calc" ? formattedday : day}</span>
            <span>{formattedDate}</span>
        </li>
    )
}

export default DateCard