import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { checkImage, formatDate, queryEndpoint } from '../../utls/utils'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import "./competition.css"
import dummyLogo from '../../assets/images/placeholder_club.png'
import Result from './tabs/result'
import Standing from './tabs/standing'
import Teams from './tabs/teams'
import TopScorers from './tabs/topscorer'

function CompetitionPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get("tab")
    const {countryId, leagueId} = useParams();

    const url = `action=get_leagues&country_id=${countryId}`
    const {data, error, isError, isPending} = useQuery({
        queryKey: ["get-league", url],
        queryFn: ()=> queryEndpoint(url)
    })

    const {data: standing, isPending: isStandingPending} = useQuery({
        queryKey: ["get-league-standing", `action=get_standings&league_id=${leagueId}`],
        queryFn: ()=> queryEndpoint(`action=get_standings&league_id=${leagueId}`)
    })

    const topScorerUrl = `action=get_topscorers&league_id=${leagueId}`
    const {data: topScorer, isPending: isTopScorerPending} = useQuery({
        queryKey:["top-scorer", topScorerUrl],
        queryFn: ()=> queryEndpoint(topScorerUrl)
    })

    if(isPending || isStandingPending || isTopScorerPending){
        return <div className='loader-wrapper'><p className='loader' /></div>
    }

    if(isError){
        return <span>Error: {error.message}</span>
    }

    const setActiveTab = (tab) => {
        setSearchParams({"tab": tab})
    }

    const competition = data.find(item => item.league_id == leagueId);
    const {league_name, league_logo, league_season, country_id, country_name} = competition
    return (
        <div className="league-wrapper">
            <h4>League {">"} {league_name}</h4>
            <div className='league-info-hero'>
                <Logo league_logo={league_logo} />
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
                {Array.isArray(standing) && <button 
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
                {Array.isArray(topScorer) && <button 
                    className={`league-tab-button ${activeTab === "top-scorers" && "active"}`} 
                    onClick={()=>setActiveTab("top-scorers")}
                >
                    Top Scorers
                </button>}
            </div>

            <div className='league-tab-content'>
                {(activeTab === "result" || activeTab === null) && <Result 
                    url={`action=get_events&from=2023-07-01&to=${formatDate(new Date())}&league_id=${leagueId}`} 
                    countryName={country_name}
                    title="Latest Scores"
                    countryId={countryId}
                    competitionName={league_name}
                />}
                {activeTab === "fixtures" && <Result 
                    url={`action=get_events&from=${formatDate(new Date())}&to=2024-06-30&league_id=${leagueId}`} 
                    countryName={country_name}
                    title="Upcoming Fixtures"
                    countryId={countryId}
                    competitionName={league_name}
                />}
                {activeTab === "standing" && <Standing leagueId={leagueId} standing={standing} />}
                {activeTab === "teams" && <Teams leagueId={leagueId} />}
                {activeTab === "top-scorers" && <TopScorers data={topScorer}/> }
            </div>

        </div>
    )
}

function Logo({league_logo}){
    const [leagueLogo, setLeagueLogo] = useState(dummyLogo)
    
    useEffect(()=>{
        checkImage(league_logo, dummyLogo, setLeagueLogo)
    },[league_logo])

    return <img className='league-logo' src={leagueLogo}/>
}

export default CompetitionPage