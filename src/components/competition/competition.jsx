import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { queryEndpoint } from '../../utls/utils'
import { Link, useParams } from 'react-router-dom'
import "./competition.css"

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
        <div>
            <h4>League {">"} {league_name}</h4>
            <div>
                <img src={league_logo} />
                <div>
                    <span>{league_name}</span>
                    <span>season: {league_season}</span>
                    <span>Country: <Link to={`/${country_id}`} className='text-white'>{country_name}</Link></span>
                </div>
            </div>

            <div>
                <button 
                    className={``} 
                    onClick={()=>setActiveTab("result")}
                >
                    Results
                </button>
                <button 
                    className={``} 
                    onClick={()=>setActiveTab("fixtures")}
                >
                    Fixtures
                </button>
                <button 
                    className={``} 
                    onClick={()=>setActiveTab("standing")}
                >
                    Standing
                </button>
                <button 
                    className={``} 
                    onClick={()=>setActiveTab("teams")}
                >
                    Teams
                </button>
                <button 
                    className={``} 
                    onClick={()=>setActiveTab("top-scorers")}
                >
                    Top Scorers
                </button>
            </div>
        </div>
    )
}

export default CompetitionPage