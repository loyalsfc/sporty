import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { checkImage, queryEndpoint } from '../../../utls/utils'
import dummyLogo from '../../../assets/images/placeholder_club.png'
import { Link } from 'react-router-dom'


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
                    return <li key={item.team_key} className='team-wrapper'><Team badge={item.team_badge} teamId={item.team_key} /></li>
                })}
            </ul>
        </div>
    )
}

function Team({badge, teamId}){
    const [imageUrl, setImageUrl] = useState(dummyLogo);

    useEffect(()=>{
        checkImage(badge, dummyLogo, setImageUrl)
    }, [badge])
    
    return (
        <Link to={`/teams/${teamId}`} className='team-content'>
            <img
                className='team-content-badge'
                src={imageUrl}
            />
        </Link>
    )
}

export default Teams