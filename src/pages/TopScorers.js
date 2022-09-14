import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../Context"
import DummyTable from "../components/DummyTable";

function TopScorers(){
    const {key, leagueId, handleChange, setleaguesSearch, searches, setSearches, leaguesSearch, leagueName} = useContext(Context)
    const [topScorersData, setTopScorersData] = useState([])

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_topscorers&league_id=${leagueId}&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setTopScorersData(data))
    },[leagueId])

    let topScorers = topScorersData.map((item, index) => {
        return(
            <tr key={item.player_key}>
                <td>{index + 1}</td>
                <td className="table-team teams"><Link to={'../players/' + item.player_key + ''}>{item.player_name}</Link></td>
                <td><Link to={`../clubs/${item.team_key}`}> {item.team_name}</Link></td>
                <td className="">{item.goals}</td>
                <td className="d-sm-none">{item.penalty_goals}</td>
                <td className="d-sm-none">{item.assists === "" ? 0 : item.assists}</td>
            </tr>
        )
    })

    window.onclick = function(event){
        if(event.target != document.querySelector('.search-result') && searches != ''){
            setSearches("");
        }
    }

    return(
        <div className="standing">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    <li>Top Scorers</li>
                    {topScorersData.length ?
                        <>
                            <li>{leagueName}</li>
                            <li>2022/2023</li>
                        </> : ""
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
                            <th className="">Pos</th>
                            <th className="table-team">Player Name</th>
                            <th className="">Team</th>
                            <th className="">Goals</th>
                            <th className="d-sm-none">Penalty Goals</th>
                            <th className="d-sm-none">Assist</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topScorersData.length ? topScorers : <DummyTable length={15} />}
                    </tbody>
                </table>
            </div>
        </div>
    )  
}

export default TopScorers