import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { queryEndpoint } from '../../../utls/utils'
import { Link } from 'react-router-dom'
import FixtureCard from '../../fixtures/fixture-card'

function Matches({url, matchType}) {
    const {data, isPending} = useQuery({
        queryKey: ["get-team-matches", url],
        queryFn: ()=> queryEndpoint(url)
    })

    if(isPending){
        return <div className='loader-wrapper'><p className='loader'/></div>
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
                                    return (
                                        <li key={match.match_id} className='score-card-wrapper'>
                                            <FixtureCard item={match} />
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