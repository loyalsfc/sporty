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
                yellow_card = {stat.player_yellow_cards}
                red_card = {stat.player_red_cards}
            />
        )
    })

    console.log(playerStat)
    return(
        <div><h1>Ji</h1>
            {playerInfo}
        </div>

    )
}

function Statistics(props){
    return(
        <div className="player-statistics-container">
            <div className="player-statistics-hero">
                <img src={props.image} />
                <div>
                    <h1>{props.number}</h1>
                    <h3>{props.playerName}</h3>
                </div>
            </div>
            <div className="player-statistics-body">
                <div className="player-statistics-details">
                    <div>Club {props.team}</div>
                    <div>Position {props.position}</div>
                    <div>Age {props.age}</div>
                    <div>Date of birth {props.dob}</div>
                </div>
                <>
                    <div className="attack-statistics">
                        <h4>Attack</h4>

                    </div>
                    <div className="player-discipline">
                        <h4>Discipline</h4>
                        <p>Yello cards <span>{props.yellow_card}</span></p>
                        <p>Red cards <span>{props.red_card}</span></p>
                        <p>Fouls <span>{props.Fouls}</span></p>
                        <p>Offsides <span>{props.offside}</span></p>
                    </div>
                </>
            </div>
        </div>
    )
}

export default PlayerStatistics