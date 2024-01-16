import React from 'react'
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utls/utils';

function DateCard({day, date, index, active, setDate}){
    const navigation = useNavigate()
    const formattedday = date.toLocaleDateString("en-US", {weekday: "long"})
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
    });

    const handleClick = () => {
        navigation(`/?date=${formatDate(date)}&index=${index}`)
        setDate(date, index);
    }
    
    return (
        <li onClick={handleClick} className={`date-card ${index === active ? "active" : ""}`}>
            <span>{day === "calc" ? formattedday : day}</span>
            <span>{formattedDate}</span>
        </li>
    )
}

export default DateCard