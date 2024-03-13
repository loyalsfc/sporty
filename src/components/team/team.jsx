import React, {useEffect, useState} from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { checkImage, formatDate, queryEndpoint } from "../../utls/utils";
import dummyLogo from '../../assets/images/placeholder_club.png'
import Matches from "./tabs/matches";
import SquadList from "./tabs/squad-list";

function Team(){
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get("tab")
    const { teamId } = useParams()
    const url = `action=get_teams&team_id=${teamId}`
    const {data, isPending, isError} = useQuery({
        queryKey: ["team-info", url],
        queryFn: ()=> queryEndpoint(url)
    })

    if(isError){
        return <div className="flex-1"></div>
    }

    if(isPending){
        return <div className="flex-1"></div>
    };

    const {team_country, team_name, team_founded, team_badge, coaches, venue, players} = data[0]

    const setActiveTab = (tab) => {
        setSearchParams({"tab": tab})
    }

    return(
        <div className="league-wrapper flex-1">
            <h4>Team {">"} {team_name}</h4>
            <div className='league-info-hero'>
                <Logo league_logo={team_badge} />
                <div className='league-info-items'>
                    <p className='league-info-item'>
                        <span>Fonded:</span> 
                        Founded in {team_founded}
                    </p>
                    <p className='league-info-item'>
                        <span>Manager:</span> 
                        {coaches[0].coach_name}
                    </p>
                    <p className='league-info-item'>
                        <span>Arena/Stadium:</span> 
                        {venue.venue_name}, {venue.venue_address}, {venue.venue_city}
                    </p>
                    <p className='league-info-item'>
                        <span>Stadium Capacity:</span> 
                        {venue.venue_capacity}
                    </p>

                    <p className='league-info-item'>
                        <span>Team Country:</span> 
                        {team_country}
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
                <button 
                    className={`league-tab-button ${activeTab === "squad" && "active"}`} 
                    onClick={()=>setActiveTab("squad")}
                >
                    Squad
                </button>
            </div>

            <div className='league-tab-content'>
                {(activeTab === "result" || activeTab === null) && <Matches
                    url={`action=get_events&from=2023-07-01&to=${formatDate(new Date())}&team_id=${teamId}`} 
                    matchType="result"
                    title="Latest Scores"
                />}
                 {(activeTab === "fixtures") && <Matches
                    url={`action=get_events&from=${formatDate(new Date())}&to=2024-06-30&team_id=${teamId}`} 
                    matchType="fixtures"
                    title="Latest Scores"
                />}
                {activeTab === "squad" && <SquadList players={players}/>}
            </div>
        </div>
    )
}

function Logo({league_logo}){
    const [leagueLogo, setLeagueLogo] = useState(dummyLogo)
    
    useEffect(()=>{
        checkImage(league_logo, dummyLogo, setLeagueLogo)
    },[league_logo])

    return <img className='league-logo' alt="Logo" src={leagueLogo} height={200}/>
}

export default Team