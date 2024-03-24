import React from 'react'
import { Link } from 'react-router-dom'

function FixtureCard({item}) {
    const {match_status, match_live} = item
    return (
        <Link className='score-card' to={`/${item.country_id}/${item.league_id}/matches/${item.match_id}?date=${item.match_date}`}>
            {match_live === "1" && match_status !== "Finished" && match_status !== "Half Time" && match_status !== "After Pen." && <div className='live-match' />}
            {match_status === "Finished" && <span className='match-status'>FT</span>}
            {match_status === "" && <span className='match-status'>{item.match_time}</span>}
            {match_status === "Half Time" && <span className='match-status'>HT</span>}
            {match_status === "Cancelled" && <span className='match-status'>Canc.</span>}
            {match_status === "Postponed" && <span className='match-status'>Posp.</span>}
            {match_status === "After Pen." && <span className='match-status'>Pen.</span>}
            {match_status === "After ET" && <span className='match-status'>AET.</span>}
            <div className='score-card-team'>
                <span className='match-teams home-team'>{item.match_hometeam_name}</span>
                <span className='match-score'>{item.match_hometeam_score} - {item.match_awayteam_score}</span> 
                <span className='match-teams'>{item.match_awayteam_name}</span>
            </div>
            <div className='match-score-mobile'>
                <span>{item.match_hometeam_score}</span>
                <span>{item.match_awayteam_score}</span>
            </div>
        </Link>
    )
}

export default FixtureCard