import React, { useState } from 'react'
import './sidebar.css'
import heroImage from '../../assets/images/hero.png'
import { IoIosSearch } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import DateCard from './card/date-card';
import Fixtures from '../fixtures';


function Main() {
    const [activeDate, setActiveDate] = useState(2)
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const todayDate = new Date();
    const tomrrow = new Date();
    tomrrow.setDate(tomrrow.getDate() + 1);
    const nextTomorrow = new Date();
    nextTomorrow.setDate(nextTomorrow.getDate() + 2);
    
    return (
        <main className='main-container'>
            <div>
                <img src={heroImage} className='hero-image'/>
            </div>
            <section className='main-content-container'>
                <div className='main-content'>
                    <div className="main-content-header">
                        <div className='toggle-live'>
                            <div className='live-icon' />
                            <span className='live-text'>Live</span>
                            {"[1]"}
                        </div>
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
                            <DateCard index={0} active={activeDate} day="calc" date={twoDaysAgo} />
                            <DateCard index={1} active={activeDate} day="Yesterday" date={yesterday} />
                            <DateCard index={2} active={activeDate} day="Today" date={todayDate} />
                            <DateCard index={3} active={activeDate} day="Tomorrow" date={tomrrow} />
                            <DateCard index={4} active={activeDate} day="calc" date={todayDate} />
                            <li className='calender-wrapper active'>
                                <span><CiCalendarDate /></span>
                                View Calender
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Fixtures/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main