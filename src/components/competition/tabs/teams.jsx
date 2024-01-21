import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { checkImage, queryEndpoint } from '../../../utls/utils'
import dummyLogo from '../../../assets/images/placeholder_club.png'


function Teams({leagueId}) {
    const url = `action=get_teams&league_id=${leagueId}`
    const {data, isPending} = useQuery({
        queryKey: ["get-teams", url],
        queryFn: () => queryEndpoint(url)
    })

    if(isPending) return;

    return (
        <div>
            <ul className='team-page-wrapper'>
                {data?.map(item => {
                    return <li key={item.team_key} className='team-wrapper'><Team badge={item.team_badge} /></li>
                })}
            </ul>
        </div>
    )
}

function Team({badge}){
    const [imageUrl, setImageUrl] = useState(dummyLogo);

    useEffect(()=>{
        checkImage(badge, dummyLogo, setImageUrl)
    }, [badge])
    
    return (
        <div className='team-content'>
            <img
                className='team-content-badge'
                src={imageUrl}
            />
        </div>
    )
}

export default Teams