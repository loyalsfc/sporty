import React, {useState, useEffect, useContext} from "react";
import {Context} from "../Context"

function TopScorers(){
    const {key, leagueId, handleChange, setleaguesSearch, searches, leaguesSearch, leagueName} = useContext(Context)
    const [topScorersData, setTopScorersData] = useState([])

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_topscorers&league_id=${leagueId}&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setTopScorersData(data))

        fetch(``)
    },[leagueId])

    let topScorers = topScorersData.map((item, index) => {
        return(
            <tr key={item.player_key}>
                <td>{index + 1}</td>
                <td className="table-team teams">{item.player_name}</td>
                <td>{item.team_name}</td>
                <td className="">{item.goals}</td>
                <td className="">{item.penalty_goals}</td>
                <td className="">{item.assists === "" ? 0 : item.assists}</td>
            </tr>
        )
    })

    return(
        <div className="standing">
            <ul className="breadcrumb">
                <li>Top Scorers</li>
                {topScorersData.length &&
                    <>
                        <li>{leagueName}</li>
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
                        //     // setTimeout(setSearches(""), 2000);
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
                        <th className="">Penalty Goals</th>
                        <th className="">Assist</th>
                    </tr>
                </thead>
                <tbody>
                    {topScorers}
                </tbody>
            </table>
        </div>
    )  
}

export default TopScorers