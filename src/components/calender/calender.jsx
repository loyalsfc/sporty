import React, { useState } from 'react'
import Calendar from 'react-calendar'
import DateRange from '../home/date-range'
import 'react-calendar/dist/Calendar.css';
import { CiCalendarDate } from 'react-icons/ci';
import './calender.css'
import Calender from './calender/calender';


function CalenderItem() {
    const [value, onChange] = useState(new Date());
    const [showCalender, setShowCalender] = useState(false)
    return (
        <li className='main-calender-wrapper'>
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