import React, {useEffect, useState, useContext} from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import blank_portrait from '../assets/images/blank_portrait.png'


function PlayerStatistics(){
    const {key} = useContext(Context)
    const { playerKey } = useParams()
    const [playerStat, setPlayerStat] = useState([]);
    const [playerImage, setPlayerImage] = useState("");

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_players&player_id=${playerKey}&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setPlayerStat([data[data.length - 1]]))
    },[playerKey, key])

    useEffect(()=>{
        checkImage();
    },[playerStat])

    function checkImage() {
        const url = playerStat[0]?.player_image
        const image = new Image();
        image.onload = function() {
            if (this.width > 0) {
                setPlayerImage(url);
            }
        }
        image.onerror = function() {
            setPlayerImage(blank_portrait)
        }
        image.src = url;
    }

    const playerInfo = playerStat.map(stat => {
        return (
            <Statistics key={stat.player_key} 
                image = {playerImage}
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
                rating = {stat.player_rating}
                apperance = {stat.player_match_played}
                apperance_from_bench = {stat.player_substitutes_on_bench}
                minutes_played= {stat.player_minutes}
                team_id = {stat.team_key}
            />
        )
    })

    return(
        <div className="">
            {playerStat.length ? playerInfo : <Statistics />}
        </div>

    )
}

function Statistics(props){
    return(
        <div className="player-statistics-container">
            <div className="player-statistics-hero  py-1">
                <div className="container mx-auto club-info">
                    <div className="player-image-wrapper">
                        <img src={props.image} alt="Player "/>
                    </div>
                    <div className="player-name-wrapper">
                        <h1>{props.number}</h1>
                        <h3>{props.playerName}</h3>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="player-statistics-body sm-flex-column">
                    <div className="player-stat player-statistics-details sm-w-100">
                        <p className="player-club">Club <span><Link to={`../clubs/${props.team_id}`}>{props.team}</Link></span></p>
                        <p>Position <span>{props.position}</span></p>
                        <p>Age <span>{props.age}</span></p>
                        <p>Date of birth <span>{props.dob}</span></p>
                        <p>player Rating <span>{props.rating}</span></p>
                        <div className="apperance">
                            <h4 className="h4">Apperance</h4>
                            <p>Apperance <span>{props.apperance}({props.apperance_from_bench})</span></p>
                            <p>Minutes Played <span>{props.minutes_played} min</span></p>
                        </div>
                    </div>
                    <div className="player-statistics-main sm-flex-column sm-w-100">
                        <div className="player-stat attack-statistics sm-w-100">
                            <h4 className="h4">Attack</h4>
                            <p>Goals <span>{props.goals}</span></p>
                            <p>Goals per match <span>{props.match_played === "0" ? "0" : (props.goals / props.match_played).toFixed(2)}</span></p>
                            <p>Penalty Scored <span>{props.penalty}</span></p>
                            <p>Penalty Won <span>{props.penalty_won}</span></p>
                            <p>Dribble <span>{props.dribble}({props.dribble_completed})</span></p>
                            <p>Shot <span>{props.shot}</span></p>
                            <p>Hit woordwork <span>{props.hit_woodwork}</span></p>
                        </div>
                        <div className="player-stat player-discipline sm-w-100">
                            <h4 className="h4">Team Play</h4>
                            <p>Assists <span>{props.assist}</span></p>
                            <p>Passes <span>{props.passes}({props.passes_completed})</span></p>
                            <p>Key Passes <span>{props.chance}</span></p>
                            <p>Crosses <span>{props.cross}</span></p>
                        </div>
                        <div className="player-stat player-discipline sm-w-100">
                            <h4 className="h4">Discipline</h4>
                            <p>Yello cards <span>{props.yellow_card}</span></p>
                            <p>Red cards <span>{props.red_card}</span></p>
                            <p>Fouls <span>{props.fouls}</span></p>
                        </div>
                        <div className="player-stat player-discipline sm-w-100">
                            <h4 className="h4">Defence</h4>
                            <p>Tackles <span>{props.tackle}</span></p>
                            <p>Blocks <span>{props.block_shot}</span></p>
                            <p>Interceptions <span>{props.interception}</span></p>
                            <p>Clearances <span>{props.clearance}</span></p>
                            <p>Duels <span>{props.duels}({props.duel_won})  </span></p>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default PlayerStatistics