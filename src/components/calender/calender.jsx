import React, { useEffect, useRef, useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { CiCalendarDate } from 'react-icons/ci';
import './calender.css'
import Calender from './calender/calender';
import { useSearchParams } from 'react-router-dom';


function CalenderItem() {
    const [searchParams] = useSearchParams()
    const dateParams = searchParams.get("date")
    const [showCalender, setShowCalender] = useState(false);
    const calenderRef = useRef(null)

    useEffect(()=>{
        closeCalender()
    },[dateParams])

    useEffect(()=>{
        const hideCalender = e => {
            if(!calenderRef.current?.contains(e.target)){
                closeCalender()
            }
        }

        document.addEventListener("click", hideCalender);

        return ()=> document.removeEventListener("click", hideCalender);
    },[])

    const closeCalender = () => setShowCalender(false);

    return (
        <li ref={calenderRef} className='main-calender-wrapper'>
            <button onClick={()=> setShowCalender(prevState => !prevState)} className='calender-wrapper active'>
                <span><CiCalendarDate /></span>
                <p className='formatted-date'>View Calender</p>
            </button>
            {showCalender && <div className='main-calender'>
                <Calender close={closeCalender} />
            </div>}
        </li>
    )
}

export default CalenderItem