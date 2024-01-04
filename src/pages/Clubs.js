import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context"
import { Link } from "react-router-dom"
import blank_portrait from '../assets/images/blank_portrait.png'

function Club(){
    const { key } = useContext(Context)
    const { clubId } = useParams()
    const [clubInfo, setClubInfo] = useState([])
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_teams&team_id=${clubId}&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => {
            setClubInfo(data)
            setPlayers(data[0].players)
        })
    },[clubId, key])

    const playsersStat = players.map(player =>{
        return <Squad
            key={player.player_key} 
            playerKey = {player.player_id}
            number={player.player_number} 
            playerName={player.player_name} 
            image={player.player_image} 
            position={player.player_type} 
            country={player.player_country} 
            apperance={player.player_match_played} 
            cleanSheet={player.player_goals} 
        />
    })

    function DummySquad(){
        let squads = []
        for(let i = 0; i <= 20; i++){
            squads.push(
                <Squad />
            )
        }
        return squads
    }

    return(
        <div className="clubs-wrapper">
            <div className="club-info">
                <div className="container mx-auto d-flex-center sm-flex-column">
                    {clubInfo.length ?
                    <>
                        <div className="image-wrapper">
                            <img src={clubInfo[0].team_badge} alt="Team badge"/>
                        </div>
                            <div>
                                <h3>{clubInfo[0].team_name}</h3>
                                <p>Coach: {clubInfo[0].coaches[0].coach_name}</p>
                        </div>
                    </> : <div className="image-wrapper"></div>
                    }
                </div>
            </div>
            <div className="club-players-container">
                <div className="container mx-auto">
                    <h3 className="team-squad">Squad</h3>
                    <div className="club-players-wrap ">
                        {clubInfo.length ? playsersStat : <DummySquad />}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Squad({number, playerName, image: player_image, position, country, apperance, cleanSheet, playerKey}){
    const [playerImage, setPlayerImage] = useState("")

    useEffect(()=>{
        checkImage();
    },[])

    function checkImage() {
        const image = new Image();
        image.onload = function() {
            if (this.width > 0) {
                setPlayerImage(player_image);
            }
        }
        image.onerror = function() {
            setPlayerImage(blank_portrait)
        }
        image.src = player_image;
    }
    
    return(
        <div className="player-wrap sm-w-100">
            <div className="player-header">
                <div className="player-header-info">
                    <p>{number}</p>
                    <h4 className="player-name">{playerName}</h4>
                    <span>{position}</span>
                </div>
                <img src={playerImage} alt="Player"/>
            </div>
            <div className="player-stat">
                <p>Nationality <span className="m-auto">{country}</span> </p>
                <p>Apperance <span className="m-auto">{apperance}</span> </p>
                <p className="player-stat-goal">Goals <span className="m-auto">{cleanSheet}</span> </p>
                <p className="view-player">
                    <span></span> 
                    <span className="m-auto"><Link to={`../players/${playerKey}`}> View Player  <i className="fa-solid fa-arrow-right"></i> </Link> </span> 
                </p>
            </div>
        </div>
    )
}

export default Club