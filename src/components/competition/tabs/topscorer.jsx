import React from "react";
import { Link } from "react-router-dom";

function TopScorers({data}){
    

    let topScorers = data?.map((item, index) => {
        return(
            <tr key={item.player_key}>
                <td>{index + 1}</td>
                <td className="table-team teams">
                    <Link className="text-white" to={'../players/' + item.player_key + ''}>{item.player_name}</Link>
                </td>
                <td>
                    <Link className="text-white" to={`../clubs/${item.team_key}`}> {item.team_name}</Link>
                </td>
                <td className="">{item.goals}</td>
                <td className="d-sm-none">{item.penalty_goals}</td>
                <td className="d-sm-none">{item.assists === "" ? 0 : item.assists}</td>
            </tr>
        )
    })

    return(
        <div className="standing">
            <div className="container mx-auto">
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
                        {topScorers}
                    </tbody>
                </table>
            </div>
        </div>
    )  
}

export default TopScorers