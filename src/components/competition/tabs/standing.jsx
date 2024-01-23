import React from "react";
import { Link } from "react-router-dom";
import DummyTable from "../../DummyTable";

function Standing({leagueId, standing}){
    return(
        <div className="standing">
            {standing[0].stage_name === "Group Stage" ? <GroupStage standing={standing} /> : <StandingTable title={'Team'} standing={standing} />}
        </div>
    )
}

function GroupStage({standing}){

    function groupStanding() {
        const groupedData = {};

        standing.forEach(item => {
          const group = item.league_round;
            if (!groupedData[group]) {
                groupedData[group] = [];
            }
            groupedData[group].push(item);
        });
      
        return groupedData;
    }

    return(
        <div>
            {Object.entries(groupStanding()).map((item, index) => {
                const [groupName, teamPosition] = item;
                return(
                    <div key={index}>
                        <StandingTable title={groupName} standing={teamPosition} />
                    </div>
                )
            })}
        </div>
    )
}

function StandingTable({standing, title}){
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

    return(
        <table>
            <thead>
                <tr>
                    <th className="table-team">{title}</th>
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
                {standing.length ? teams : <DummyTable length={4}/>}
            </tbody>
        </table>
    )
}

export default Standing