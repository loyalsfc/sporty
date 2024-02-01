import React, { useEffect, useState } from 'react'
import dummyLogo from '../../assets/images/placeholder_club.png'
import { Link } from 'react-router-dom';

function TeamDetail({club_badge, team_name, teamId}) {
    const [clubImage, setClubImage] = useState(dummyLogo);

    useEffect(()=>{
        checkImage();
    },[])

    function checkImage() {
        const image = new Image();
        image.onload = function() {
            if (this.width > 0) {
                setClubImage(club_badge);
            }
        }
        image.onerror = function() {
            setClubImage(dummyLogo)
        }
        image.src = club_badge;
    }

    return (
        <Link to={`/teams/${teamId}`} className='club-detail'>
            <img className='' height={100} src={clubImage} />
            <p>{team_name}</p>
        </Link>
    )
}

export default TeamDetail