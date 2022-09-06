import React, {useEffect, useState} from "react";

function Standing(){
    const key = '5e3582a7d8d1a741f870124c02aaa88abb97f126b697a05112d549c4302c9c7e'
    const [stand, setStand] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const [leaguesSearch, setleaguesSearch] = useState('');
    const [searches, setSearches] = useState('');
    const [leagueId, setLeagueId] =  useState (152)

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setStand(data))
    },[leagueId])

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data =>{
            setLeagues(data.filter(data => {
                if(data.country_name.toLowerCase() === "intl" || data.country_name.replaceAll(' ', '') === "Worldcup" || data.league_name.includes('Cup') || data.league_name.includes('Women')) return
                return data
            }))
        })
    },[])

    const teams = stand.map(item => {
        return(
            <tr key={item.overall_league_position}>
                <td className="table-team teams">{item.team_name}</td>
                <td>{item.overall_league_payed}</td>
                <td className="d-none">{item.overall_league_W}</td>
                <td className="d-none">{item.overall_league_D}</td>
                <td className="d-none">{item.overall_league_L}</td>
                <td className="d-none">{item.overall_league_GF}</td>
                <td className="d-none">{item.overall_league_GA}</td>
                <td>{item.overall_league_GF - item.overall_league_GA}</td>
                <td>{item.overall_league_PTS}</td>
            </tr>
        )
    })

    function getLeagueId(event){
        setLeagueId(event.target.getAttribute("data-league-id"))
        setSearches('')

    }

    function handleChange(event){
        setleaguesSearch(event.target.value)
        const searchedResult = leagues.filter(league => league.league_name.toLowerCase().includes(event.target.value.toLowerCase()))
        setSearches(searchedResult.map(result => {
            if(event.target.value !== ""){
                return <div 
                            key={result.league_id} 
                            data-league-id={result.league_id}
                            onClick={getLeagueId}
                        >
                            {result.country_name + " " + result.league_name}
                        </div>
            }
        }))
    }

    return(
        <div className="standing">
            <ul className="breadcrumb">
                <li>Standing</li>
                {stand.length &&
                    <>
                        <li>{stand[0].league_name}</li>
                        <li>2022/2023</li>
                    </>
                }
            </ul>
            <div className="search-container">
                <div className="search-wrapper">
                    <input 
                        type="text" 
                        id="search-league" 
                        name="search-league" 
                        className="search-league" 
                        onChange={handleChange}
                        onBlur={()=>{
                            setleaguesSearch("")
                            // setTimeout(setSearches(""), 2000);
                        }}
                        value={leaguesSearch}
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="search-result">
                    {searches}
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className="table-team">Team</th>
                        <th>Played</th>
                        <th className="d-none">Won</th>
                        <th className="d-none">Drawn</th>
                        <th className="d-none">Lost</th>
                        <th className="d-none">+</th>
                        <th className="d-none">-</th>
                        <th>GD</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams}
                </tbody>
            </table>
        </div>
    )
}


export default Standing