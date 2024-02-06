import React from 'react'

function Calender() {

    const date = new Date();

    const totalDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    let dayOfFirstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1).getDay()

    console.log(new Date(date.getFullYear(), date.getMonth(), 1).getDay())
    
    const dateArrays = () => {
        let days = []

        for (let index = 2 - dayOfFirstDay; index <= totalDayOfMonth; index++) {
            days.push(index)
        }

        return days
    }

    return (
        <div className='calender-table'>
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thur</span>
            <span>Fri</span>
            <span>Sat</span>
            {dateArrays().map(item => {
                if(item < 1) return <span key={item}></span>
                return <span key={item}>{item}</span>
            })}
        </div>
    )
}

export default Calender