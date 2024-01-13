import React from 'react'
import "./lineup.css"
import HomeLineup from './home-lineup'
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaArrowCircleUp } from 'react-icons/fa'
import { IoMdFootball } from 'react-icons/io'

function Lineup({lineup, match_hometeam_system, match_awayteam_system, home_team, away_team, cards, goalscorer, substitutions}) {
    //Filter out goals scored during penaty shootout
    const normalGoals = goalscorer.filter(item => item.score_info_time !== "Penalty")
    return (
        <div>
            <section>
                <h4 className="league_name_heading border-0">Line Up</h4>
                <div className='pitch-container'>
                    <span>{home_team}: {match_hometeam_system}</span>
                    <div className='pitch-wrapper-border'>
                        <div className="pitch-wrapper">
                            <div className="pitch-corner-flag top left"/>
                            <div className="pitch-corner-flag top right"/>
                            <div className="pitch-corner-flag bottom left"/>
                            <div className="pitch-corner-flag bottom right"/>
                            <div className="middle-line"/>
                            <div className="pitch-center-circle">
                                <div className="pitch-kickoff-spot"/>
                            </div>
                            <div className="pitch-box-eighteen top">
                                <div className="pitch-kickoff-spot penalty top"/>
                                <div className="pitch-box-eighteen top"/>
                                <div className='pitch-box-eighteen-arch top'/>
                            </div>
                            <div className="pitch-box-eighteen down">
                                <div className="pitch-kickoff-spot penalty down"/>
                                <div className="pitch-box-eighteen down"/>
                                <div className='pitch-box-eighteen-arch down'/>
                            </div>

                            <HomeLineup 
                                system={match_hometeam_system} 
                                starting_lineups={lineup.home.starting_lineups} 
                                cards={cards} 
                                goalscorer={normalGoals}
                                arrMethod={"push"}
                                substitute={lineup.home.substitutes}
                                substitutions={substitutions.home}
                            />
                            <HomeLineup 
                                system={match_awayteam_system} 
                                starting_lineups={lineup.away.starting_lineups} 
                                cards={cards} 
                                goalscorer={normalGoals} 
                                arrMethod={"unshift"}
                                substitute={lineup.away.substitutes}
                                substitutions={substitutions.away}
                            />
                        </div>
                    </div>
                    <span>{away_team}: {match_awayteam_system}</span>
                </div>
            </section>
            {(substitutions.home.length > 0 || substitutions.away.length > 0) && <section>
                <h4 className="league_name_heading border-0">Substitutions</h4>
                <div className='substitutions-container'>
                    <ul>
                        {substitutions.home.map((item, index) => {
                            return(
                                <li key={index} className='substition-item'>
                                    <span className='substitution-time'>{item.time}</span>
                                    <div className='substituted-players-wrapper'>
                                        <span className='substituted-player'>
                                            <span className='pitch-player-out'><FaArrowAltCircleDown /></span>
                                            <span>{item.substitution.split(" | ")[0]}</span>
                                        </span>
                                        <span className='substituted-player'>
                                            <span className='pitch-player-in'><FaArrowAltCircleUp /></span>
                                            <span>{item.substitution.split(" | ")[1]}</span>
                                        </span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        {substitutions.away.map((item, index) => {
                            return(
                                <li key={index} className='substition-item'>
                                    <span className='substitution-time'>{item.time}</span>
                                    <div className='substituted-players-wrapper'>
                                        <span className='substituted-player'>
                                            <span className='pitch-player-out'><FaArrowAltCircleDown /></span>
                                            <span>{item.substitution.split(" | ")[0]}</span>
                                        </span>
                                        <span className='substituted-player'>
                                            <span className='pitch-player-in'><FaArrowAltCircleUp /></span>
                                            <span>{item.substitution.split(" | ")[1]}</span>
                                        </span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>}
            {(lineup.home.substitutes.length > 0 || lineup.away.substitutes.length > 0) &&<section>
                <h4 className="league_name_heading border-0">Substitutes</h4>
                <div className='substitute-container'>
                    <ul>
                        {lineup.home.substitutes.map((item, index) => {
                            return(
                                <li key={index} className='substition-item subs'>
                                    <span className={normalGoals.some(scorer => (scorer.home_scorer_id === item.player_key || scorer.away_scorer_id === item.player_key) && (!scorer.home_scorer.includes("(o.g.)") || !scorer.away_scorer.includes("(o.g.)" )) ) ? "substituted-player-goals" : "invisible"}><IoMdFootball /></span>
                                    <span className={substitutions.home.some(substitute => substitute.substitution_player_id.includes(item.player_key)) ? 'pitch-player-in' : "invisible"}><FaArrowAltCircleUp /></span>
                                    {item.lineup_player}
                                </li>
                            )
                        })}
                    </ul>
                    <ul>
                        {lineup.away.substitutes.map((item, index) => {
                            return(
                                <li key={index} className='substition-item subs'>
                                    <span className={normalGoals.some(scorer => (scorer.home_scorer_id === item.player_key || scorer.away_scorer_id === item.player_key) && (!scorer.home_scorer.includes("(o.g.)") || !scorer.away_scorer.includes("(o.g.)" )) ) ? "substituted-player-goals" : "invisible"}><IoMdFootball /></span>
                                    <span className={substitutions.away.some(substitute => substitute.substitution_player_id.includes(item.player_key)) ? 'pitch-player-in' : "invisible"}><FaArrowAltCircleUp /></span>
                                    {item.lineup_player}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>}
            <section>
                <h4 className="league_name_heading border-0">Coaches</h4>
                <div className='substitute-container'>
                    <span className='substition-item subs'>
                        <span className='invisible'><FaArrowCircleUp/></span>
                        <span className='invisible'><FaArrowCircleUp/></span>
                        {lineup.home.coach.length > 0 && lineup.home.coach[0].lineup_player}
                    </span>
                    <span className='substition-item subs'>
                        <span className='invisible'><FaArrowCircleUp/></span>
                        <span className='invisible'><FaArrowCircleUp/></span>
                        {lineup.away.coach.length > 0 && lineup.away.coach[0].lineup_player}
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Lineup