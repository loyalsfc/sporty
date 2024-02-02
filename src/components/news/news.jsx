import React from 'react'
import news1 from '../../assets/images/news1.png'
import news2 from '../../assets/images/news2.png'
import news3 from '../../assets/images/news3.png'
import news4 from '../../assets/images/news4.png'
import news5 from '../../assets/images/news5.png'
import news6 from '../../assets/images/news6.png'
import './news.css'
import Card from './card'

function News() {
    return (
        <div className='country_sidebar news_sidebar'>
            <h3 className='trending-news'>
                Trending News
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 16.5L9.75 9L2.25 1.5" stroke="#C3CC5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </h3>
            <div className='main-news-wrapper'>
                <img
                    className='main-news-image'
                    src={news1}
                    alt=''
                />
                <div className='main-news-snippet'>
                    <div className='main-news-title-wrapper'>
                        <h5 className='main-news-title'>Results and scores from the Premier League....!!</h5>
                        <span className='main-news-timeago'>5 hours ago</span>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" fill="#C3CC5A" stroke="#C3CC5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div>
                    <Card
                        image={news2}
                        title="Here are the top 100 players and managers"
                        date="01 Feb 2024, 06:00 AM"
                        isBookmarked={false}
                    />
                    <Card
                        image={news3}
                        title="Results and scores from the Premier League....!!"
                        date="31 Jan 2024, 06:00 AM"
                        isBookmarked={false}
                    />
                    <Card
                        image={news4}
                        title="Join or start a competition now!"
                        date="31 Jan 2024, 06:00 AM"
                        isBookmarked={true}
                    />
                    <Card
                        image={news5}
                        title="Results and scores from the Premier League....!!"
                        date="30 Jan 2024, 06:00 AM"
                        isBookmarked={true}
                    />
                    <Card
                        image={news6}
                        title="Results and scores from the Premier League....!!"
                        date="30 Jan 2024, 06:00 AM"
                        isBookmarked={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default News