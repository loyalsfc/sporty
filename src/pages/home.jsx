import React from 'react'
import Sidebar from '../components/home/sidebar'
import News from '../components/home/news'
import Main from '../components/home/main'

function Home() {
    return (
        <div className='home-page-wrapper'>
            <Sidebar />
            <Main />
            <News />
        </div>
    )
}

export default Home