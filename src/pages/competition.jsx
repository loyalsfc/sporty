import React from 'react'
import News from '../components/home/news'
import Sidebar from '../components/home/sidebar'
import CompetitionPage from '../components/competition/competition'

function Competition() {
    return (
        <div className='home-page-wrapper'>
            <aside className='country_sidebar_wrapper'>
                <Sidebar />
            </aside>
            <main className='main-container'>
                <CompetitionPage />
            </main>
            <aside className='country_sidebar_wrapper'>
                <News />
            </aside>
        </div>
    )
}

export default Competition