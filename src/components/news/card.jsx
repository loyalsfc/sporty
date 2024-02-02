import React from 'react'
import { Link } from 'react-router-dom'

function Card({image, title, date, isBookmarked}) {
    return (
        <Link to={""} className='news-card-wrapper'>
            <img
                src={image}
                height={60}
                alt='Image'
            />
            <div className='news-card-title-wrapper'>
                <p className='news-card-title'>{title}</p>
                <span className='news-card-date'>{date}</span>
            </div>
            {isBookmarked ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" fill="#C3CC5A" stroke="#C3CC5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                
            ):(
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="#C3CC5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            )}
        </Link>
    )
}

export default Card