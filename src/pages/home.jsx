import React from 'react'
import Sidebar from '../components/home/sidebar'
import News from '../components/home/news'
import Main from '../components/home/main'

function Home() {
    return (
        <div className='home-page-wrapper'>
            <aside className='country_sidebar_wrapper'>
                <Sidebar />
            </aside>
            <Main />
            <aside className='country_sidebar_wrapper'>
                <News />
            </aside>

        </div>
    )
}

export default Home