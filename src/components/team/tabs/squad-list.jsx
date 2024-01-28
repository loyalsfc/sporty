import React, { useEffect, useState } from 'react'
import blank_portrait from "../../../assets/images/blank_portrait.png"
import { Link } from 'react-router-dom'
import '../team.css'

function SquadList({players}) {
    
    const groupByPosition = () => {
        const groupedPlayers = {
            Goalkeepers: [],
            Defenders: [],
            Midfielders: [],
            Forwards: []
        }

        players.forEach(item => {
            groupedPlayers[item.player_type].push(item)
        })

        return groupedPlayers
    }

    return (
        <div className=''>
            {Object.entries(groupByPosition()).map((item, index) =>{
                const [playerType, players] = item;
                return(
                    <div key={index}>
                        <h4 className="league_name_heading">{playerType}</h4>
                        <ul className='squad_list_wrapper'>
                            {players?.map(player =>{
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
                            })}
                        </ul>
                    </div>
                )   
            })}
        </div>
    )
}

function Squad({number, playerName, image: player_image, position, country, apperance, cleanSheet, playerKey}){
    const [playerImage, setPlayerImage] = useState(blank_portrait)

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
        <li className="player-wrap">
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
                    <span className="m-auto">
                        <Link to={`../players/${playerKey}`} className='text-white'> 
                        View Player  <i className="fa-solid fa-arrow-right"></i> 
                        </Link> 
                    </span> 
                </p>
            </div>
        </li>
    )
}

export default SquadList