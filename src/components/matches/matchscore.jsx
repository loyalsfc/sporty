import React from 'react'

function Matchscore({home_score, away_score, match_status, home_team_pk, away_team_pk, league_name}) {
    return (
        <div>
            <h4>{league_name}</h4>
            <div className='match-details-score'><p>{home_score}</p>:<p>{away_score}</p></div>
            {match_status === "After Pen." && <span className='match-details-status'>Penalty Shootout: {home_team_pk} : {away_team_pk}</span>}
            <span className='match-details-status'>{match_status}</span>
        </div>
    )
}

export default Matchscore