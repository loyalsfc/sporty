import React from 'react'
import "./lineup.css"
import HomeLineup from './home-lineup'

function Lineup({lineup, match_hometeam_system, match_awayteam_system}) {
    return (
        <div>
            <h4 className="league_name_heading">Line Up</h4>
            <div className='pitch-container'>
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

                    <HomeLineup system={match_hometeam_system} starting_lineups={lineup.home.starting_lineups} arrMethod={"push"}/>
                    <HomeLineup system={match_awayteam_system} starting_lineups={lineup.away.starting_lineups} arrMethod={"unshift"}/>
                </div>
            </div>
        </div>
    )
}

export default Lineup