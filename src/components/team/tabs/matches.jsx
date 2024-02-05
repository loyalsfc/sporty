import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { queryEndpoint } from '../../../utls/utils'
import { Link } from 'react-router-dom'

function Matches({url, matchType}) {
    const {data, isPending} = useQuery({
        queryKey: ["get-team-matches", url],
        queryFn: ()=> queryEndpoint(url)
    })

    if(isPending){
        return <div className='loader-wrapper'><p className='loading'/></div>
    }

    function groupByLeague() {
        let match;
        if(matchType === "result"){
            match = data.sort((a, b) => new Date(b.match_date) - new Date(a.match_date)).filter(item => item.match_status !== "")
        } else {
            match = data.filter(item => item.match_status === "")
        }
        const groupedData = {};

        match.forEach(item => {
          const leagueId = item.league_name;
            if (!groupedData[leagueId]) {
                groupedData[leagueId] = [];
            }
            groupedData[leagueId].push(item);
        });
      
        return groupedData;
    }
    return (
        <div>
            {Object.entries(groupByLeague()).map((item, index) => {
                const [leagueId, competitionMatches] = item;
                return(
                    <div key={index}>
                        <h4 className="league_name_heading">
                            <Link to={`/${competitionMatches[0].country_id}/${leagueId}`} className='text-white'>{competitionMatches[0].league_name}</Link>
                            </h4>
                            <ul>
                                {competitionMatches.map(match => {
                                    const {match_status, match_live} = match
                                    return (
                                    <li key={match.match_id} className='score-card-wrapper'>
                                        <Link  className='score-card' to={`/${match.country_id}/${match.league_id}/matches/${match.match_id}?date=${item.match_date}`}>
                                            {match_live === "1" && match_status !== "Finished" && match_status !== "Half Time" && match_status !== "After Pen." && <div className='live-match' />}
                                            {match_status === "Finished" && <span className='match-status'>{match.match_date}</span>}
                                            {match_status === "" && <span className='match-status'>{match.match_date}</span>}
                                            {match_status === "Half Time" && <span className='match-status'>HT</span>}
                                            {match_status === "Cancelled" && <span className='match-status'>Canc.</span>}
                                            {match_status === "Postponed" && <span className='match-status'>Posp.</span>}
                                            {match_status === "After Pen." && <span className='match-status'>Pen.</span>}
                                            {match_status === "After ET" && <span className='match-status'>AET.</span>}
                                            <span className='match-teams home-team'>{match.match_hometeam_name}</span> 
                                            <span className='match-score'>{match.match_hometeam_score} - {match.match_awayteam_score}</span> 
                                            <span className='match-teams'>{match.match_awayteam_name}</span>
                                        </Link>
                                    </li>
                                )})}
                            </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Matches