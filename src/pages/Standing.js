import React, {useEffect, useState} from "react";

function Standing(){
    const key = '5e3582a7d8d1a741f870124c02aaa88abb97f126b697a05112d549c4302c9c7e'
    const [stand, setStand] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const [leaguesSearch, setleaguesSearch] = useState('');

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setStand(data))
    },[])

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setLeagues(data))
    },[])

    const teams = stand.map(item => {
        return(
            <tr key={item.overall_league_position}>
                <td className="table-team teams">{item.team_name}</td>
                <td>{item.overall_league_payed}</td>
                <td>{item.overall_league_W}</td>
                <td>{item.overall_league_D}</td>
                <td>{item.overall_league_L}</td>
                <td>{item.overall_league_GF}</td>
                <td>{item.overall_league_GA}</td>
                <td>{item.overall_league_GF - item.overall_league_GA}</td>
                <td>{item.overall_league_PTS}</td>
            </tr>
        )
    })

    function handleChange(event){
        setleaguesSearch(event.target.value)

        const searchedResult = leagues.filter(league => league.league_name.includes(event.target.value))

        console.log(searchedResult)
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
            <div className="search-wrapper">
                <input 
                    type="text" 
                    id="search-league" 
                    name="search-league" 
                    className="search-league" 
                    onChange={handleChange}
                    value={leaguesSearch}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className="table-team">Team</th>
                        <th>Played</th>
                        <th>Won</th>
                        <th>Drawn</th>
                        <th>Lost</th>
                        <th>+</th>
                        <th>-</th>
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