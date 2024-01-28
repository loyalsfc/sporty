import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { queryEndpoint } from '../../../utls/utils'

function Matches({url}) {
    const {data, isPending, isError, error} = useQuery({
        queryKey: ["get-team-matches", url],
        queryFn: ()=> queryEndpoint(url)
    })

    if(isPending){
        return <div className='loader-wrapper'><p className='loading'/></div>
    }

    console.log(data);

    return (
        <div>
            
        </div>
    )
}

export default Matches