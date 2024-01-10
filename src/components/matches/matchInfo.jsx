import React from 'react'

function MatchInfo({league_name, match_status, match_stadium, match_date, match_time}) {
    function matchTime(){
        const currentYear = new Date().getFullYear()
        //Split the date string into array and reverse to column
        const date = match_date.split("-").reverse()
        //Check if the current year matches the match year and remove the year value
        if(currentYear == date[2]) date.pop() 
        return date.join("/");
    }

    return (
        <div className='match-info-details'>
            <h4>{league_name}</h4>
            <p className='color-primary'>{match_status === "" ? `${matchTime()} - ${match_time}` : match_status === "Cancelled" ? "Match Status: Canc." : "Match Status: Posp."}</p>
            <h5>Stadium: {match_stadium}</h5>
        </div>
    )
}

export default MatchInfo