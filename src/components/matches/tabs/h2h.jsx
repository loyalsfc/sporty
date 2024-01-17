import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { queryEndpoint } from '../../../utls/utils'
import { Link } from 'react-router-dom'

function H2H({homeId, awayId}) {
    const query = `action=get_H2H&firstTeamId=${homeId}&secondTeamId=${awayId}`
    const {data, isLoading, error, isError} = useQuery({
        queryKey: ["h2h", query],
        queryFn: () => queryEndpoint(query)
    })

    if(isLoading){
        return <div className='loader-wrapper'><p className='loader' /></div>
    }

    if(isError){
        return <p>An error occured</p>
    }


    return (
        <div>
            {data?.firstTeam_VS_secondTeam.length > 0 && <section>
                <h4 className="league_name_heading border-0">Recent Meetings</h4>
                <ul>
                    {data?.firstTeam_VS_secondTeam.map(item => {
                        return(
                            <li key={item.match_id} className='h2h-card-wrapper'>
                                <span className='h2h-date'>{new Date(item.match_date).toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric", weekday: "long"})}</span>
                                <div>
                                    <Link  className='score-card' to={`/${item.country_id}/${item.league_id}/matches/${item.match_id}?date=${item.match_date}`}>
                                        {item.match_status === "Finished" && <span className='match-status'>FT</span>}
                                        {item.match_status === "Cancelled" && <span className='match-status'>Canc.</span>}
                                        {item.match_status === "Postponed" && <span className='match-status'>Posp.</span>}
                                        {item.match_status === "After Pen." && <span className='match-status'>Pen.</span>}
                                        {item.match_status === "After ET" && <span className='match-status'>AET.</span>}
                                        <span className='match-teams home-team'>{item.match_hometeam_name}</span> 
                                        <span className='match-score'>{item.match_hometeam_score} - {item.match_awayteam_score}</span> 
                                        <span className='match-teams'>{item.match_awayteam_name}</span>
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>}
            <section>
                <h4 className="league_name_heading border-0">Form Guide</h4>
                <div className='form-guide-wrapper'>
                    <ul className='form-guide-list'>
                        {data?.firstTeam_lastResults.map(item => {
                            const isHomeTeam = item.match_hometeam_id === homeId;
                            const matchDraw = item.match_hometeam_score === item.match_awayteam_score
                            const matchWon = ((isHomeTeam && item.match_hometeam_score > item.match_awayteam_score) || (!isHomeTeam && item.match_hometeam_score < item.match_awayteam_score))
                            return(
                                <li key={item.match_id} className='match-form-guide-card'>
                                    <span>{isHomeTeam ? "(H)" : "(A)"}</span>
                                    <span>{isHomeTeam ? item.match_awayteam_name : item.match_hometeam_name}</span>
                                    <span className='h2h-match-score'>{item.match_hometeam_score} - {item.match_awayteam_score}</span>
                                    <span className={`match-form-guide-result ${matchDraw ? "draw" : matchWon ? "won" : "loose"}`}>
                                        {matchDraw ? "D" : matchWon ? "W" : "L"}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        {data?.secondTeam_lastResults.map(item => {
                            const isHomeTeam = item.match_hometeam_id === awayId;
                            const matchDraw = item.match_hometeam_score === item.match_awayteam_score
                            const matchWon = ((isHomeTeam && item.match_hometeam_score > item.match_awayteam_score) || (!isHomeTeam && item.match_hometeam_score < item.match_awayteam_score))
                            return(
                                <li key={item.match_id} className='match-form-guide-card'>
                                    <span>{isHomeTeam ? "(H)" : "(A)"}</span>
                                    <span>{isHomeTeam ? item.match_awayteam_name : item.match_hometeam_name}</span>
                                    <span className='h2h-match-score'>{item.match_hometeam_score} - {item.match_awayteam_score}</span>
                                    <span className={`match-form-guide-result ${matchDraw ? "draw" : matchWon ? "won" : "loose"}`}>
                                        {matchDraw ? "D" : matchWon ? "W" : "L"}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default H2H