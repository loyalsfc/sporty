import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Context} from '../Context'

function Standing(){
    const [stand, setStand] = useState([]);
    const {leagueId, handleChange, setleaguesSearch, leaguesSearch, searches, key} = useContext(Context)

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setStand(data))
    },[leagueId])

    const teams = stand.map(item => {
        return(
            <tr key={item.overall_league_position}>
                <td className="table-team teams"><Link to={item.team_id}>{item.team_name}</Link></td>
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