import React, {useEffect, useState, useContext} from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";

function PlayerStatistics(){
    const {key} = useContext(Context)
    const { playerKey } = useParams()
    const [playerStat, setPlayerStat] = useState([]);

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_players&player_id=${playerKey}&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setPlayerStat([data[data.length - 1]]))
    },[])

    console.log(playerStat)

    const playerInfo = playerStat.map(stat => {
        return (
            <Statistics 
                image = {stat.player_image}
                number = {stat.player_name}
                playerName = {stat.player_number}
                yellow_card = {stat.player_yellow_cards}
                red_card = {stat.player_red_cards}
                fouls = {stat.player_fouls_committed === "" ? 0 : stat.player_fouls_committed}
                team  = {stat.team_name}
                position = {stat.player_type}
                age = {stat.player_age}
                dob = {stat.player_birthdate === "" ? 0 : stat.player_birthdate}
                assist = {stat.player_assists === "" ? 0 : stat.player_assists}
                passes = {stat.player_passes === "" ? 0 : stat.player_passes}
                passes_completed = {stat.player_passes_accuracy === "" ? 0 : stat.player_passes_accuracy}
                chance = {stat.player_key_passes === "" ? 0 : stat.player_key_passes}
                cross = {stat.player_crosses_total === "" ? 0 : stat.player_crosses_total}
                tackle  = {stat.player_tackles === "" ? 0 : stat.player_tackles}
                block_shot = {stat.player_blocks === "" ? 0 : stat.player_blocks}
                interception = {stat.player_interceptions === "" ? 0 : stat.player_interceptions}
                clearance = {stat.player_clearances === "" ? 0 : stat.player_clearances}
                duels = {stat.player_duels_total === "" ? 0 : stat.player_duels_total}
                duel_won = {stat.player_duels_won === "" ? 0 : stat.player_duels_won}
                goals = {stat.player_goals === "" ? 0 : stat.player_goals}
                match_played = {stat.player_match_played === "" ? 0 : stat.player_match_played}
                penalty = {stat.player_pen_scored === "" ? 0 : stat.player_pen_scored}
                penalty_won = {stat.player_pen_won === "" ? 0 : stat.player_pen_won}
                dribble_completed = {stat.player_dribble_succ === "" ? 0 : stat.player_dribble_succ}
                dribble = {stat.player_dribble_attempts === "" ? 0 : stat.player_dribble_attempts}
                hit_woodwork = {stat.player_woordworks === "" ? 0 : stat.player_woordworks}
                shot = {stat.player_shots_total === "" ? 0 : stat.player_shots_total}
            />
        )
    })

    console.log(playerStat)
    return(
        <div className="">
            {playerInfo}
        </div>

    )
}

function Statistics(props){
    return(
        <div className="player-statistics-container">
            <div className="player-statistics-hero club-info">
                <div className="player-image-wrapper">
                    <img src={props.image} />
                </div>
                <div>
                    <h1>{props.number}</h1>
                    <h3>{props.playerName}</h3>
                </div>
            </div>
            <div className="player-statistics-body">
                <div className="player-stat player-statistics-details">
                    <p>Club <span>{props.team}</span></p>
                    <p>Position <span>{props.position}</span></p>
                    <p>Age <span>{props.age}</span></p>
                    <p>Date of birth <span>{props.dob}</span></p>
                </div>
                <div>
                    <div className="player-stat attack-statistics">
                        <h4>Attack</h4>
                        <p>Goals <span>{props.goals}</span></p>
                        <p>Goals per match <span>{(props.goals / props.match_played).toFixed(2)}</span></p>
                        <p>Penalty Scored <span>{props.penalty}</span></p>
                        <p>Penalty Won <span>{props.penalty_won}</span></p>
                        <p>Dribble <span>{props.dribble}({props.dribble_completed})</span></p>
                        <p>Shot <span>{props.shot}</span></p>
                        <p>Hit woordwork <span>{props.hit_woodwork}</span></p>
                    </div>
                    <div className="player-stat player-discipline">
                        <h4>Team Play</h4>
                        <p>Assists <span>{props.assist}</span></p>
                        <p>Passes <span>{props.passes}({props.passes_completed})</span></p>
                        <p>Key <span>{props.chance}</span></p>
                        <p>Crosses <span>{props.cross}</span></p>
                    </div>
                    <div className="player-stat player-discipline">
                        <h4>Discipline</h4>
                        <p>Yello cards <span>{props.yellow_card}</span></p>
                        <p>Red cards <span>{props.red_card}</span></p>
                        <p>Fouls <span>{props.fouls}</span></p>
                    </div>
                    <div className="player-stat player-discipline">
                        <h4>Defence</h4>
                        <p>Tackles <span>{props.tackle}</span></p>
                        <p>Blocks <span>{props.block_shot}</span></p>
                        <p>Interceptions <span>{props.interception}</span></p>
                        <p>Clearances <span>{props.clearance}</span></p>
                        <p>Duels <span>{props.duels}({props.duel_won})  </span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerStatistics