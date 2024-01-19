import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { formatDate, queryEndpoint } from '../../../utls/utils'
import MatchFeatures from '../../fixtures/features';

function Result() {
    const {countryId, leagueId} = useParams();
    const {data: countries} = useQuery({ 
        queryKey: ['countries', "action=get_countries"], 
        queryFn: ()=> queryEndpoint("action=get_countries") 
    })
    const url = `action=get_events&from=2023-04-05&to=${formatDate(new Date())}&league_id=${leagueId}`
    const {data, isPending, isError, error} = useQuery({
        queryKey: ["get-league", url],
        queryFn: ()=> queryEndpoint(url)
    })

    if(isPending){
        return <div className='loader-wrapper'><p className='loading'/></div>
    }

    const countryName = countries.find(item => item.country_id === countryId).country_name;
    const formatData = {
        [countryName]: data.sort((a, b) => new Date(b.match_date) - new Date(a.match_date))
    }

    return (
        <div>
            <h4 className="league_name_heading border-0">Latest Scores</h4>
            <MatchFeatures country_fixtures={formatData}/>
        </div>
    )
}

export default Result