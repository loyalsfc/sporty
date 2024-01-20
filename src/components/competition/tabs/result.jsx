import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { queryEndpoint } from '../../../utls/utils'
import MatchFeatures from '../../fixtures/features';

function Result({url, countryName, title}) {
    const {data, isPending, isError, error} = useQuery({
        queryKey: ["get-league", url],
        queryFn: ()=> queryEndpoint(url)
    })

    if(isPending){
        return <div className='loader-wrapper'><p className='loading'/></div>
    }

    console.log(data)

    if(!Array.isArray(data)){
        return (
            <div>
                <h4 className="league_name_heading border-0">{title}</h4>
                <p className='no-upcoming'>No Upcoming Match Found</p>
            </div>
        )
    }

    const formatData = {
        [countryName]: data.sort((a, b) => new Date(b.match_date) - new Date(a.match_date))
    }

    return (
        <div>
            <h4 className="league_name_heading border-0">{title}</h4>
            <MatchFeatures country_fixtures={formatData}/>
        </div>
    )
}

export default Result