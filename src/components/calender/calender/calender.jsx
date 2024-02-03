import React from 'react'

function Calender() {
    const date = new Date();

    const totalDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    console.log(totalDayOfMonth);

    return (
        <div>Calender</div>
    )
}

export default Calender