import React, { useState } from 'react'
import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { formatDate } from '../../../utls/utils'

function Calender() {
    const [searchParams] = useSearchParams()
    const dateParams = searchParams.get("date")
    const todayDate = new Date();
    const [date, setDate] = useState(todayDate)

    const totalDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const dayOfFirstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()

    const nextMonth = () => {
        const currentMonth = date.getMonth();
        const year = date.getFullYear()

        if(currentMonth < 12){
            setDate(new Date(year, currentMonth + 1, 1))
        }
    }

    const prevMonth = () => {
        const currentMonth = date.getMonth();
        const year = date.getFullYear()

        if(currentMonth < 12){
            setDate(new Date(year, currentMonth - 1, 1))
        }
    }
    
    const dateArrays = useMemo(()=>{
        let days = []

        for (let index = 1 - dayOfFirstDay; index <= totalDayOfMonth; index++) {
            days.push(index)
        }

        return days
    },[date])

    return (
        <div className='calender-table-wrapper'>
            <div className='calender-table-header'>
                <button onClick={prevMonth} className='calender-nav-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-left">
                        <path d="m12 19-7-7 7-7"/>
                        <path d="M19 12H5"/>
                    </svg>
                </button>
                {date.toLocaleDateString("en-US", {weekday: "short", day: "numeric", month: "short", year: "numeric"})}
                <button onClick={nextMonth} className='calender-nav-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-right">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                    </svg>
                </button>
            </div>
            <div className='calender-table'>
                <span className='calender-column'>Su</span>
                <span className='calender-column'>Mo</span>
                <span className='calender-column'>Tu</span>
                <span className='calender-column'>We</span>
                <span className='calender-column'>Th</span>
                <span className='calender-column'>Fr</span>
                <span className='calender-column'>Sa</span>
                {dateArrays.map(item => {
                    const itemDate = new Date(date.getFullYear(), date.getMonth(), item)
                    if(item < 1) return <span key={item} className='calender-column'></span>
                    return <Link 
                        to={`/?date=${formatDate(itemDate)}`} 
                        className={`calender-column ${itemDate.toDateString() === todayDate.toDateString() && "active"}`} 
                        key={item}
                    >
                        {item}
                    </Link>
                })}
            </div>;jlbhkb
        </div>
    )
}

export default Calender