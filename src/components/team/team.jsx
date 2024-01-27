import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import blank_portrait from '../../assets/images/blank_portrait.png'
import { useQuery } from "@tanstack/react-query";
import { queryEndpoint } from "../../utls/utils";

function Team(){
    const { teamId } = useParams()
    const activeTab = ""
    const url = `action=get_teams&team_id=${teamId}`
    const {data, isPending, isError, error} = useQuery({
        queryKey: ["team-info", url],
        queryFn: ()=> queryEndpoint(url)
    })

    if(isError){
        console.log(error)   
    }

    if(isPending) return;

    console.log(data)

    const {team_country, team_name, team_key, team_founded, team_badge, coaches, venue} = data[0]

    const setActiveTab = (tab) => {

    }

    const playsersStat = data?.map(player =>{
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

    return(
        <div className="league-wrapper">
            <h4>League {">"} {team_name}</h4>
            <div className='league-info-hero'>
                <Logo />
                <div className='league-info-items'>
                    <p className='league-info-item'>
                        <span>Fonded:</span> 
                        <span>Founded in {team_founded}</span>
                    </p>
                    <p className='league-info-item'>
                        <span>Manager:</span> 
                        {coaches[0].coach_name}
                    </p>
                    <p className='league-info-item'>
                        <span>Arena/Stadium:</span> 
                        <span>{venue.venue_name}, {venue.venue_address}, {venue.venue_city}</span>
                    </p>
                    <p className='league-info-item'>
                        <span>Stadium Capacity:</span> 
                        <span>{venue.venue_capacity}</span>
                    </p>
                </div>
            </div>

            <div>
                <button 
                    className={`league-tab-button ${(activeTab === "result" || activeTab === null) && "active"}`} 
                    onClick={()=>setActiveTab("result")}
                >
                    Results
                </button>
                <button 
                    className={`league-tab-button ${activeTab === "fixtures" && "active"}`} 
                    onClick={()=>setActiveTab("fixtures")}
                >
                    Fixtures
                </button>
                {<button 
                    className={`league-tab-button ${activeTab === "standing" && "active"}`} 
                    onClick={()=>setActiveTab("standing")}
                >
                    Standing
                </button>}
                <button 
                    className={`league-tab-button ${activeTab === "teams" && "active"}`} 
                    onClick={()=>setActiveTab("teams")}
                >
                    Teams
                </button>
                {<button 
                    className={`league-tab-button ${activeTab === "top-scorers" && "active"}`} 
                    onClick={()=>setActiveTab("top-scorers")}
                >
                    Top Scorers
                </button>}
            </div>

            <div className='league-tab-content'></div>
        </div>
    )
}

function Logo({league_logo}){
    const [leagueLogo, setLeagueLogo] = useState(dummyLogo)
    
    useEffect(()=>{
        checkImage(league_logo, dummyLogo, setLeagueLogo)
    },[league_logo])

    return <img className='league-logo' src={leagueLogo} height={200}/>
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

export default Team