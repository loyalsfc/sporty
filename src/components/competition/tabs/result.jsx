import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { queryEndpoint } from '../../../utls/utils'
import MatchFeatures from './competitionMatches'

function Result({url, countryName, title, countryId, competitionName}) {
    const {data, isPending} = useQuery({
        queryKey: ["get-league", url],
        queryFn: ()=> queryEndpoint(url)
    })

    if(isPending){
        return <div className='loader-wrapper'><p className='loader' /></div>
    }

    if(!Array.isArray(data)){
        return (
            <div>
                <h4 className="league_name_heading border-0">{title}</h4>
                <p className='no-upcoming'>No Upcoming Match Found</p>
            </div>
        )
    }

    return (
        <div>
            <h4 className="league_name_heading border-0">{title}</h4>
            <MatchFeatures 
                matches={title === "Latest Scores" ? 
                    data.sort((a, b) => new Date(b.match_date) - new Date(a.match_date)).filter(item => item.match_status !== "")
                        : 
                            data.filter(item => item.match_status === "")
                }
                countryId={countryId}
                country={countryName}
                competitionName={competitionName}
            />
        </div>
    )
}

export default Result