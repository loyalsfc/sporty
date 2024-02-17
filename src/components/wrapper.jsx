import React from 'react'
import Sidebar from './home/sidebar'
import News from './news/news'
import Header from './Header'

function Wrapper({Main}) {
    return (
        <div className=''>
            <Header/>
            <div className='home-page-wrapper'>
                <aside className='country_sidebar_wrapper country-side-bar-wrapper'>
                    <Sidebar />
                </aside>
                <main className='main-container'>
                    <Main />
                </main>
                <aside className='country_sidebar_wrapper news-side-bar-wrapper'>
                    <News />
                </aside>
            </div>
        </div>
    )
}

export default Wrapper