import React, { useEffect, useRef, useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { CiCalendarDate } from 'react-icons/ci';
import './calender.css'
import Calender from './calender/calender';


function CalenderItem() {
    const [showCalender, setShowCalender] = useState(false);
    const calenderRef = useRef(null)

    useEffect(()=>{
        const hideCalender = e => {
            if(!calenderRef.current?.contains(e.target)){
                setShowCalender(false);
            }
        }

        document.addEventListener("click", hideCalender);

        return ()=> document.removeEventListener("click", hideCalender);
    },[])
    return (
        <li ref={calenderRef} className='main-calender-wrapper'>
            <button onClick={()=> setShowCalender(prevState => !prevState)} className='calender-wrapper active'>
                <span><CiCalendarDate /></span>
                View Calender
            </button>
            {showCalender && <div className='main-calender'>
                <Calender />
            </div>}
        </li>
    )
}

export default CalenderItem