import React from 'react'
import Sidebar from './home/sidebar'
import News from './home/news'

function Wrapper({Main}) {
    return (
        <div className='home-page-wrapper'>
            <aside className='country_sidebar_wrapper'>
                <Sidebar />
            </aside>
            <main className='main-container'>
                <Main />
            </main>
            <aside className='country_sidebar_wrapper'>
                <News />
            </aside>
        </div>
    )
}

export default Wrapper