import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import DateCard from './card/date-card'
import { CiCalendarDate } from 'react-icons/ci'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

const twoDaysAgo = new Date();
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const todayDate = new Date();
const tomrrow = new Date();
tomrrow.setDate(tomrrow.getDate() + 1);
const nextTomorrow = new Date();
nextTomorrow.setDate(nextTomorrow.getDate() + 2);

function DateRange() {
    const [searchParams] = useSearchParams();
    const activeIndex = searchParams.get("index")
    const [activeDate, setActiveDate] = useState(activeIndex ? parseInt(activeIndex) : 2);
    const localtion = useLocation();

    function setDate(date, index){
        setActiveDate(index);
    }

    return (
        <>
            <div className="main-content-header">
                <Link to={"/matches/live"} className={`toggle-live ${localtion.pathname === '/matches/live' && "active"}`}>
                    <div className='live-icon' />
                    <span className='live-text'>Live</span>
                    {"[1]"}
                </Link>
                <div className='matches-search'>
                    <IoIosSearch />
                    <input id='search-match' placeholder='' className='match-search-input' />
                    <label htmlFor="search-match" className='match-search-placeholder'>Search for matches</label>
                </div>
                <div className='matches-filter'>
                    <select name="matches-filter" id="matches-filter">
                        <option value="all">All Matches</option>
                    </select>
                </div>
            </div>
            <div className='date-wrapper'>
                <ul className='date-card-wrapper'>
                    <DateCard
                        index={0} 
                        active={activeDate} 
                        day="calc" 
                        date={twoDaysAgo}  
                        setDate={setDate}
                    />
                    <DateCard 
                        index={1} 
                        active={activeDate} 
                        day="Yesterday" 
                        date={yesterday}  
                        setDate={setDate}
                    />
                    <DateCard 
                        index={2} 
                        active={activeDate} 
                        day="Today" 
                        date={todayDate}  
                        setDate={setDate}
                    />
                    <DateCard 
                        index={3} 
                        active={activeDate} 
                        day="Tomorrow" 
                        date={tomrrow}  
                        setDate={setDate}
                    />
                    <DateCard 
                        index={4} 
                        active={activeDate} 
                        day="calc" 
                        date={nextTomorrow}  
                        setDate={setDate}
                    />
                    <li className='calender-wrapper active'>
                        <span><CiCalendarDate /></span>
                        View Calender
                    </li>
                </ul>
            </div>   
        </>
    )
}

export default DateRange