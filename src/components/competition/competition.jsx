import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { queryEndpoint } from '../../utls/utils'
import { Link, useParams } from 'react-router-dom'
import "./competition.css"
import Result from './tabs/result'

function CompetitionPage() {
    const {countryId, leagueId} = useParams();
    const [activeTab, setActiveTab] = useState("result")
    const url = `action=get_leagues&country_id=${countryId}`
    const {data, error, isError, isPending} = useQuery({
        queryKey: ["get-league", url],
        queryFn: ()=> queryEndpoint(url)
    })

    if(isPending){
        return <div className='loader-wrapper'><p className='loader' /></div>
    }

    if(isError){
        return <span>Error: {error.message}</span>
    }

    const competition = data.find(item => item.league_id == leagueId);
    console.log(competition)
    const {league_name, league_logo, league_season, country_id, country_name} = competition
    return (
        <div className="league-wrapper">
            <h4>League {">"} {league_name}</h4>
            <div className='league-info-hero'>
                <img className='league-logo' src={league_logo} />
                <div className='league-info-items'>
                    <p className='league-info-item'>
                        <span>League:</span> 
                        {league_name}
                    </p>
                    <p className='league-info-item'>
                        <span>season:</span> 
                        {league_season}
                    </p>
                    <p className='league-info-item'>
                        <span>Country:</span> 
                        <Link to={`/${country_id}`} className='text-white'>{country_name}</Link>
                    </p>
                </div>
            </div>

            <div>
                <button 
                    className={`league-tab-button ${activeTab === "result" && "active"}`} 
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
                    className={`league-tab-button ${activeTab === "standing" && "active"}`} 
                    onClick={()=>setActiveTab("standing")}
                >
                    Standing
                </button>
                <button 
                    className={`league-tab-button ${activeTab === "teams" && "active"}`} 
                    onClick={()=>setActiveTab("teams")}
                >
                    Teams
                </button>
                <button 
                    className={`league-tab-button ${activeTab === "top-scorers" && "active"}`} 
                    onClick={()=>setActiveTab("top-scorers")}
                >
                    Top Scorers
                </button>
            </div>

            <div className='league-tab-content'>
                {activeTab === "result" && <Result />}
            </div>

        </div>
    )
}

export default CompetitionPage