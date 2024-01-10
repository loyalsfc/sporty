import React from 'react'
import Sidebar from '../components/home/sidebar'
import News from '../components/home/news'
import Match from '../components/matches/Match'

function Matchdetails() {
    return (
        <div className='home-page-wrapper'>
            <Sidebar />
            <Match />
            <News />
        </div>
    )
}

export default Matchdetails