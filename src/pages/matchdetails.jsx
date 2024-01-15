import React from 'react'
import Sidebar from '../components/home/sidebar'
import News from '../components/home/news'
import Match from '../components/matches/Match'

function Matchdetails() {
    return (
        <div className='home-page-wrapper'>
            <aside className='country_sidebar_wrapper'>
                <Sidebar />
            </aside>
            <main className='main-container'>
                <Match />
            </main>
            <aside className='country_sidebar_wrapper'>
                <News />
            </aside>
        </div>
    )
}

export default Matchdetails