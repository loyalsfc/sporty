import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Context} from '../Context'
import DummyTable from "../components/DummyTable";
import Search from "../components/search";

function Standing(){
    const [stand, setStand] = useState([]);
    const {leagueId, key} = useContext(Context)

    useEffect(()=>{
        fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}&APIkey=${key}`)
        .then((res, req) => res.json())
        .then(data => setStand(data))
    },[leagueId, key])

    const teams = stand.map(item => {
        return(
            <tr key={item.overall_league_position}>
                <td className="table-team teams"><Link to={`../clubs/${item.team_id}`}>{item.team_name}</Link></td>
                <td>{item.overall_league_payed}</td>
                <td className="d-sm-none">{item.overall_league_W}</td>
                <td className="d-sm-none">{item.overall_league_D}</td>
                <td className="d-sm-none">{item.overall_league_L}</td>
                <td className="d-sm-none">{item.overall_league_GF}</td>
                <td className="d-sm-none">{item.overall_league_GA}</td>
                <td>{item.overall_league_GF - item.overall_league_GA}</td>
                <td>{item.overall_league_PTS}</td>
            </tr>
        )
    })

    return(
        <div className="standing">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    <li>Standing</li>
                    {stand.length ? 
                        <>
                            <li>{stand[0].league_name}</li>
                            <li>2022/2023</li>
                        </> : ""
                    }
                </ul>
                <Search/>
                <table>
                    <thead>
                        <tr>
                            <th className="table-team">Team</th>
                            <th>P</th>
                            <th className="d-sm-none">Won</th>
                            <th className="d-sm-none">Drawn</th>
                            <th className="d-sm-none">Lost</th>
                            <th className="d-sm-none">+</th>
                            <th className="d-sm-none">-</th>
                            <th>GD</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stand.length ? teams : <DummyTable length={20}/>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Standing