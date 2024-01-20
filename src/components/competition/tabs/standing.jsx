import React from "react";
import { Link } from "react-router-dom";
import DummyTable from "../../DummyTable";

function Standing({leagueId, standing}){
    const teams = standing?.map(item => {
        return(
            <tr key={item.overall_league_position}>
                <td className="table-team teams"><Link className="text-white" to={`../clubs/${item.team_id}`}>{item.team_name}</Link></td>
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

    console.log(standing)

    return(
        <div className="standing">
            <div className="container mx-auto">
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
                        {standing.length ? teams : <DummyTable length={20}/>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Standing