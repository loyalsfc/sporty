import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getLiveScores } from '../../utls/utils'
import { useParams, useSearchParams } from 'react-router-dom'
import './match.css'
import MatchInfo from './matchInfo'
import Matchscore from './matchscore'
import TeamDetail from './teamDetail'
import Info from './tabs/info'
import Lineup from './tabs/lineup'

function Match() {
    const [activeTab, setActiveTab] = useState("info")
    const {matchId} = useParams();
    const [searchParams] = useSearchParams();
    const matchDate = searchParams.get("date")
    const link = `from=${matchDate}&to=${matchDate}&match_id=${matchId}`
    const {data, error, isError, isPending} = useQuery({
        queryKey: ["matchDetails", link],
        queryFn: ()=> getLiveScores(link)
    })

    if(isPending){
        return <p>Loading...</p>
    }

    if(isError){
        return <span>Error: {error.message}</span>
    }

    const {team_home_badge, team_away_badge, match_hometeam_name, match_awayteam_name, match_status, match_live, match_time, league_name, match_date, match_stadium, match_hometeam_score, match_awayteam_score, match_round, match_hometeam_penalty_score, match_awayteam_penalty_score, cards, substitutions, goalscorer, lineup, match_hometeam_system, match_awayteam_system} = data[0]
    {match_live === "1" && match_status !== "Finished" && match_status !== "Half Time" && <div className='live-match' />}
                                            
    return (
        <main className='main-container'>
                <div className='match-card-wrapper'>
                    <div className='match-info'>
                        <TeamDetail club_badge={team_home_badge} team_name={match_hometeam_name} />
                        <div>
                            {(match_status === "" || match_status === "Cancelled" || match_status === "Postponed") && 
                                <MatchInfo 
                                    league_name={league_name + " " + match_round} 
                                    match_status={match_status} 
                                    match_stadium={match_stadium}
                                    match_time={match_time}
                                    match_date={match_date}
                                />
                            }
                            {(match_status === "Finished" || match_status === "Half Time" || match_status === "After Pen." || match_status === "After ET") && 
                                <Matchscore 
                                    league_name={league_name + " " + match_round} 
                                    home_score={match_hometeam_score} 
                                    away_score={match_awayteam_score}
                                    match_status={match_status}
                                    home_team_pk={match_hometeam_penalty_score}
                                    away_team_pk={match_awayteam_penalty_score}
                                />
                            }
                            {match_live === "1" && match_status !== "Finished" && match_status !== "Half Time" &&  <div>
                                <h4>{league_name}</h4>
                                <div className='match-details-score'><p>{match_hometeam_score}</p>:<p>{match_awayteam_score}</p></div>
                                <span className='match-details-status live-match-anim'>{match_status}'</span>
                            </div>}
                        </div>
                        <TeamDetail club_badge={team_away_badge} team_name={match_awayteam_name} />
                    </div>
                    <div className='match-buttons-wrapper'>
                        <button onClick={()=>setActiveTab("info")} className={`match-buttons ${activeTab === "info" && 'active'}`}>Match Info</button>
                        <button onClick={()=>setActiveTab("lineup")} className={`match-buttons ${activeTab === "lineup" && 'active'}`}>Line Up</button>
                        <button onClick={()=>setActiveTab("stats")} className={`match-buttons ${activeTab === "stats" && 'active'}`}>Stats</button>
                    </div>
                </div>

                <div className='match-info-wrapper'>
                    {activeTab === "info" && <Info matchStatus={match_status} scorers={goalscorer} substitutions={substitutions} cards={cards} />}
                    {activeTab === "lineup" && <Lineup lineup={lineup} match_hometeam_system={match_hometeam_system} match_awayteam_system={match_awayteam_system} />}
                </div>
        </main>
    )
}

export default Match