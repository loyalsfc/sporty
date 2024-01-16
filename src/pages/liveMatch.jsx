import React from 'react'
import Sidebar from '../components/home/sidebar'
import News from '../components/home/news'
import LiveMatches from '../components/live-matches/live-matches'

function LiveMatch() {
    return (
        <div className='home-page-wrapper'>
            <aside className='country_sidebar_wrapper'>
                <Sidebar />
            </aside>
            <LiveMatches />
            <aside className='country_sidebar_wrapper'>
                <News />
            </aside>

        </div>
    )
}

export default LiveMatch