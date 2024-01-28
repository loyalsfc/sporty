import React from 'react'
import Team from '../components/team/team'
import News from '../components/home/news'
import Sidebar from '../components/home/sidebar'

function Clubs() {
    return (
        <div className='home-page-wrapper'>
            <aside className='country_sidebar_wrapper'>
                <Sidebar />
            </aside>
            <Team />
            <aside className='country_sidebar_wrapper'>
                <News />
            </aside>

        </div>
    )
}

export default Clubs